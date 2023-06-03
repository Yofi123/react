import React, { useEffect, useState } from 'react'

function AjaxApi(){
    const[error,setError] = useState(null);
    const[isLoaded,setIsLoaded] = useState(false);
    const[items,setItems] = useState([]);


    useEffect(() => {
       fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
       .then(res => res.json())
       .then((result) =>{
        setIsLoaded(true)
        setItems(result)
       },
       (error) => {
        setIsLoaded(true);
        setError(error);
       })
       
       
    },[])
    if(error){
        return(
            <div>Error:{error.message}</div>
        )
    }else if(!isLoaded){
        return(
            <div>Loading...</div>
        )
    }else{
        return(
            <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>City</th>
                </thead>
                {items.map(item => (
                    <tr key={items.id}>
                     <td>{item.name}</td>
                     <td>{item.city}</td>
                    </tr>
                ))}
               
            </table>
        </div>
        )
       
    }
}
export default AjaxApi;

