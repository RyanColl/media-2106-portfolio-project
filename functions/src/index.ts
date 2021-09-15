import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const firestore = admin.firestore();


export const grabPage = functions.https.onCall(async (data, context) => {
    const {pageName} = data;
    let t = await firestore.collection('pages').doc(pageName).get()
    return t.data();
})

export const getTools = functions.https.onCall(async (data, context) => {
    let t = await firestore.collection('tools').get()
    return t.docs.map(data => {
        return data.data()
    })
})