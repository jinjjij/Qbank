import { useEffect } from "react";
import { fireStore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { SubjectList } from "./Lists/SubjectList";
import { BookList } from "./Lists/BookList";

/*
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
*/


let displaymode = "";

function changeDisplayMode({mode}){
  displaymode = mode;
}


function DisplayControl({displaymode}){
  if(displaymode === "subject"){
    return <SubjectList clickFunction={changeDisplayMode("book")}/>
  }else if(displaymode === "book"){
    return <></>
  }else{
    return <div>no lists!</div>
  }
}



function App() {
  useEffect(() => {
    console.log(fireStore);
  });
  

  return(
    <div className="App">
      <DisplayControl displaymode='subject'/>
    </div>
  );
}

export default App;
