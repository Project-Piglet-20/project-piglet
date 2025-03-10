// firestoreUtil.js
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

export const FirestoreUtil = {
  /**
   * Creates a new document in the specified collection.
   * @param {Object} params
   * @param {string} params.collectionName - The name of the collection.
   * @param {Object} params.data - The data to save in the document.
   * @returns {Promise<Object>} The created document's ID or an error.
   */
  createDocument: async ({ collectionName, data }) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document created with ID:", docRef.id);
      return { success: true, docId: docRef.id };
    } catch (error) {
      console.error("Error creating document:", error);
      return { success: false, error };
    }
  },

  /**
   * Reads a document from the specified collection.
   * @param {Object} params
   * @param {string} params.collectionName - The name of the collection.
   * @param {string} params.docId - The document ID to read.
   * @returns {Promise<Object>} The document data or an error.
   */
  readDocument: async ({ collectionName, docId }) => {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { success: true, data: docSnap.data() };
      } else {
        console.error("No such document!");
        return { success: false, error: "No such document" };
      }
    } catch (error) {
      console.error("Error reading document:", error);
      return { success: false, error };
    }
  },

  /**
   * Updates an existing document in the specified collection.
   * @param {Object} params
   * @param {string} params.collectionName - The name of the collection.
   * @param {string} params.docId - The document ID to update.
   * @param {Object} params.data - The data to update.
   * @returns {Promise<Object>} The result of the update operation.
   */
  updateDocument: async ({ collectionName, docId, data }) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, data);
      console.log("Document updated");
      return { success: true };
    } catch (error) {
      console.error("Error updating document:", error);
      return { success: false, error };
    }
  },

  /**
   * Deletes a document from the specified collection.
   * @param {Object} params
   * @param {string} params.collectionName - The name of the collection.
   * @param {string} params.docId - The document ID to delete.
   * @returns {Promise<Object>} The result of the delete operation.
   */
  deleteDocument: async ({ collectionName, docId }) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      console.log("Document deleted");
      return { success: true };
    } catch (error) {
      console.error("Error deleting document:", error);
      return { success: false, error };
    }
  },

  /**
   * Queries documents from the specified collection.
   * @param {Object} params
   * @param {string} params.collectionName - The name of the collection.
   * @param {Array} [params.queryConstraints=[]] - An array of Firestore query constraints.
   * @returns {Promise<Object>} An array of document objects or an error.
   */
  queryDocuments: async ({ collectionName, queryConstraints = [] }) => {
    try {
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef, ...queryConstraints);
      const querySnapshot = await getDocs(q);
      const documents = [];
      querySnapshot.forEach((docSnap) => {
        documents.push({ id: docSnap.id, ...docSnap.data() });
      });
      console.log("Queried documents:", documents);
      return { success: true, documents };
    } catch (error) {
      console.error("Error querying documents:", error);
      return { success: false, error };
    }
  },
};
