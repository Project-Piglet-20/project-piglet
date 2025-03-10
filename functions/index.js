const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const createNotification = async (notification) => {
  try {
    const docRef = await admin
      .firestore()
      .collection("notifications")
      .add(notification);
    console.log("Notification added", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding notification", error);
    throw error;
  }
};

exports.issueCreated = functions.firestore
  .document("issues/{issueId}")
  .onCreate(async (snap, context) => {
    const issue = snap.data();
    console.log("Issue created with ID:", context.params.issueId);
    const notification = {
      locality: issue.Locality,
      problem: issue.Type,
      time: admin.firestore.FieldValue.serverTimestamp(),
      status: "Reported",
      docId: context.params.issueId,
    };

    return createNotification(notification);
  });
