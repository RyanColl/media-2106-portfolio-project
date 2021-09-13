import { firebaseServices } from "./firebase";
const {functions} = firebaseServices;
const firebaseHandler = {
    grabData: async (pageName) => {
        let grabData = functions.httpsCallable('grabData');
        return (await grabData({"pageName": `${pageName}`})).data
    }
}


export default firebaseHandler;