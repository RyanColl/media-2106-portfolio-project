import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const firestore = admin.firestore();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const grabData = functions.https.onCall(async (data, context) => {
    let t = await firestore.collection('pages').doc('home').get()
    return t.data();
})