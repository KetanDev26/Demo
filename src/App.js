import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Axios from 'axios'

function App() {



  const data={
    name:" "
  }

  const[add,setadd]=useState(data)
  const[Names,Setnames]=useState([])

  const HandleChange=(event)=>{
    setadd({...add,[event.target.name]:event.target.value})
    console.log(add)
}

const HandleSubmit=(e)=>{

  e.preventDefault();

  Axios.post('https://localhost:5000/Demo/add',add)
  .then(result=>{

    console.log(result);

    setadd(result.data)
  }).catch(err=>{

    console.log(err.response.data)
  })


}


async function GetData() {

  let Name=await Axios.get("https://localhost:5000/Demo/")
  let NameData=await Name.data

    Setnames(NameData)
    console.log(Names);
}


useEffect(() => {
 
  GetData();
}, [])


  return (
    <div className="App">
      
      <input type="text" name="name"  onChange={HandleChange}></input>
      <button onClick={HandleSubmit}>Add me</button>

      <div style={{height:200,width:400, border:"1px solid black",overflow:"auto",left:550,
      position:"absolute",
      top:100
    
    
    }}>
      {Names.map((l)=>(


        <p>{l.name}</p>
      ))}

      
      </div>

    </div>
  );
}

export default App;
