import { firebaseServices } from "./firebase";
const {functions, getImgUrl} = firebaseServices;
const firebaseHandler = {
    grabData: async (pageName) => {
      
        let grabData = functions.httpsCallable('grabHomePage');
        
        return grabData({"pageName": `${pageName}`})
        .then((result) => {
            // Getting Data
            const data = result.data;
            return data;
          })
          .catch((error) => {
            // Getting the Error details.
            const {code, message, details} = error;
            console.log(`Error message: code: ${code}, message: ${message}, details: ${details}`)
            return undefined;
            // ...
          });
    },
    getImgUrl: async imgName => {
      return await getImgUrl(imgName);
    },
    getTools: async () => {
      let getTools = functions.httpsCallable('getTools')
      return await getTools();
    },
    getTime: async () => {
      let getTime = functions.httpsCallable('getTime')
      return await getTime();
    }
}


export default firebaseHandler;