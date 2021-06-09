import React from 'react'
import axios from "axios";

export default function Cases({category}) {
  const [result, setResult] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/cases/categeories/${category}`).then((res) => {
            setResult( res.data.map((elem, i) => {
                return <div key={i}>
                  {/* {elem.category,elem.caseName,elem.neededAmount} */}
                  <p>{elem}</p>
                  
                  
                  </div>;
             }));
            })
            .catch((err) => {
              return <div>{err}</div>;
            })},[]);
            
    return (
        <div>
           {result} 
        </div>
    )
}
