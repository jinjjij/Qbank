import { useEffect } from "react";
import { fireStore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

async function addData(){
  console.log("addData()");
  try {
      const docRef = await addDoc(collection(fireStore, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


function App() {
  useEffect(() => {
    console.log(fireStore);
    addData();
  });
  

  return <div className="App">{fireStore._databaseId.projectId}</div>;
}

export default App;
