import firebase from "firebase/app";
import "firebase/functions";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDR_dE3Td6zxIIRdPGD0o6VFF2kqXRtefA",
    authDomain: "fullstack-dev-f9c5a.firebaseapp.com",
    projectId: "fullstack-dev-f9c5a",
    storageBucket: "fullstack-dev-f9c5a.appspot.com",
    messagingSenderId: "904970299316",
    appId: "1:904970299316:web:bdea614ae290018b2c34e1"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = storage.ref()
const firebaseServices = {
    functions: firebaseApp.functions(),
    getImgUrl: imgName => {
      return storageRef.child(imgName).getDownloadURL()
    }
}
export { firebaseServices };