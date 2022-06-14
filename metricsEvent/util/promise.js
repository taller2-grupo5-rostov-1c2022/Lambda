// https://stackoverflow.com/questions/32461271/nodejs-timeout-a-promise-if-failed-to-complete-in-time
// https://stackoverflow.com/users/157247/t-j-crowder

class TimeoutPromise extends Promise {
  constructor(timeout, callback) {
    const haveTimeout = typeof timeout === "number";
    const init = haveTimeout ? callback : timeout;
    super((resolve, reject) => {
      if (haveTimeout) {
        const timer = setTimeout(() => {
          reject(new Error(`TimeoutError`));
        }, timeout);
        init(
          (value) => {
            clearTimeout(timer);
            resolve(value);
          },
          (error) => {
            clearTimeout(timer);
            reject(error);
          }
        );
      } else {
        init(resolve, reject);
      }
    });
  }

  static resolveWithTimeout(timeout, x) {
    if (!x || typeof x.then !== "function") {
      return this.resolve(x);
    }
    return new this(timeout, x.then.bind(x));
  }
}

exports.TimeoutPromise = TimeoutPromise;
