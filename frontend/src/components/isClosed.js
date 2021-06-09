import { React, useState,useEffect } from "react";
import axios from "axios";
export default function Closed({id}) {
  const [result, setResult] = useState([])
  
  axios
    .get(`http://localhost:5000/cases/case/${id}`)
    .then((result) => {
      console.log(result)
      setResult( result.data.map((elem, i) => {
        return <div key={i}>
          {/* {elem.category,elem.caseName,elem.neededAmount} */}
          <input>{elem.category}</input>
          <input>{elem.caseName}</input>
          <input>{elem.neededAmount}</input>
          <input>{elem.address}</input>
          
          </div>;
      }));
    })
    .catch((err) => {
      return <div>{err}</div>;
    })  

    const update=()=>{
      axios
    .put(`http://localhost:5000/cases/case/${id}`),{
      isClosed:true
    }
    .then((result) => {
      console.log(result)
      setResult( result.data.map((elem, i) => {
        return <div key={i}>
          {/* {elem.category,elem.caseName,elem.neededAmount} */}
          <p>{elem.category}</p>
          <p>{elem.caseName}</p>
          <p>{elem.neededAmount}</p>
          <p>{elem.address}</p>
          
          </div>;
        // return <div>
        //   <p>{elem. caseName}</p>
        // </div>
      }))
    })

    .catch((err) => {
      return <div>{err}</div>;
    }) 
    }
  
    return <div>
      <p>{result}</p>
    <button onclick={update}>isClosed</button>
    </div>
  


 
  }
