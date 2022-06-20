# LAMBDAS

Lambda functions that run on AWS

<!--

Currently hosted by nzulaica on us-east-2

-->

## Functions

### Metrics Event

Updates some metric data on our metrics collection ( firestore )

- password resets

### Refresh Subscriptions

Calls the refresh subscriptions endpoint on our Subscriptions API (songs-server)

Should run once a day

## Development

### Installation

```
npm i
```

### Uploading to AWS

Using AWS Lambda Console

> make a zip including the node_modules
