//import logo from './logo.svg';
import './App.css';
import react from 'react';
import {useState} from 'react';
import Axios from 'axios';
import axios from 'axios';


function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] =  useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

/*
  const displayInfo = () => {
    console.log(name + age +  country + position + wage);
  }
*/

  const addEmployee = ()  => {
    // console.log("name");
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
  }).then ( () => { setEmployeeList([
    ...employeeList, {
          name :  name,
          age : age,
          country : country,
          position : position,
          wage : wage,
    },
  ]);

     // console.log("success!!!");

    });
  };





  const getEmployee = ()  => {
    Axios.get("http://localhost:3001/employees", {
    
  }).then ( (response) => {
      console.log(response.data);
    })
  };



  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", {
      wage : newWage,
      id : id,
    }).then(
      (response) => {
        //alert("update");

        setEmployeeList(employeeList.map((val)=>{
          return val.id == id ? { id:val.id, name: val.name, age:val.age, position:val.position, country:val.country, wage:val.newWage} : val
        }))
      })
      
    
  };




  const deleteEmployee = (id)=>{
    Axios.delete('http://localhost:3001/delete/${id}').then((response)=>{
      setEmployeeList(
        employeeList.filter((val)=>{
          return val.id != id;
        })
      );
    });

  };




  return (
    <div className="App">
    <div className="information">
      <label>Name:</label>
      <input type="text" 
      onChange={(event) => {setName(event.target.value);}}>
      </input>
      <label>Age:</label>
      <input type="number"
       onChange={(event) => {setAge(event.target.value);}}>
       </input>
      <label>Country:</label>
      <input type="text"  
      onChange={(event) => {setCountry(event.target.value);}}>
      </input>
      <label>Position:</label>
      <input type="text"  
      onChange={(event) => {setPosition(event.target.value);}}>
      </input>
      <label>Wage(year):</label>
      <input type="number"  
      onChange={(event) => {setWage(event.target.value);}}>
      </input>
      <button onClick={addEmployee}>Add Employee</button>

    <div className='employees'>
    <button onClick={getEmployee}>Show Employee</button>
    </div>

    {employeeList.map((val,key)=>{
      return <div classname = "showemployee">
      <div>
        <h3>Name :{val.name}</h3>
        <h3>Age :{val.age}</h3>
        <h3>Country :{val.country}</h3>
        <h3>Position :{val.position}</h3>
        <h3>Wage :{val.wage}</h3>
      </div>
      <div>
        {""}
        <input type = "number" placeholder='New wage' onChange={(event) => {setNewWage(event.target.value);}}></input>
        <button onClick={()=>(updateEmployeeWage(val.id))}>Update</button>
        <button onClick={()=> (deleteEmployee(val.id))}>Delete</button>
      </div>
      </div>;
    })}
  </div>
  </div>
  );
}

export default App;
