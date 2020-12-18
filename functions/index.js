const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotifications = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.issueCreated = functions.firestore
  .document("issues/{issueId}")
  .onCreate((doc) => {
    const issue = doc.data();
    const notification = {
      locality: `${issue.Locality}`,
      problem: `${issue.Type}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotifications(notification);
  });
