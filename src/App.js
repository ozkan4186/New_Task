import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import {useState} from "react"
import {AddUser,UpdateUser} from "./utils/functions"
import { ToastContainer } from "react-toastify";

const initialValues={
  username:"",
  sectors:"",
  
}
function App() {
  const [info, setInfo] = useState(initialValues)
  const [isAdd,setIsAdd]=useState("ADD")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(info.id){
      UpdateUser(info)
    }
    else{
      AddUser(info)
    }
    setInfo(initialValues)
    setIsAdd("ADD")
  }

  const editUser = (id, username, sectors) => {
    setIsAdd("UPDATE");
    setInfo({ id, username, sectors });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
         isAdd = {isAdd}
      />

      <Contacts editUser={editUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
