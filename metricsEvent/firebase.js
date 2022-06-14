const admin = require("firebase-admin");
const serviceAccount = require("./google_credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.firestore = admin.firestore();
exports.incrementField = admin.firestore.FieldValue.increment;
