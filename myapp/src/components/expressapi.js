import React, { useEffect, useState } from 'react'

function ExpressAPI(){
    const[data,setData] = useState("")


    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/about")
    //     .then(res => res.txt())
    //     .then((d) => setData(d))
    //     .catch(error => console.log(error))
    // },[])
    return(
        <div>
            <p>{data}</p>
        </div>
    )
}
export default ExpressAPI;