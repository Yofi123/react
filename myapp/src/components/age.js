import React,{useState} from 'react'
import '/home/yofi/react/myapp/src/css/age.css'

import {
    differenceInDays,
    differenceInMonths,
    differenceInYears,
} from 'date-fns'

function Age(){
    const[time,setTime] = useState("")
    const[age,setAge] = useState("")
    
    const handleChangeDate = (e) => {
        setTime(e.target.value)
    }   
    const calculate = (time) => {
        let currentTime = new Date();
        const birthDateObj = new Date(time);
        const ageYears = differenceInYears(currentTime,birthDateObj)
        
        const ageMonths = differenceInMonths(currentTime,birthDateObj)%12
        const ageDays = differenceInDays(
            currentTime,
            new Date(currentTime.getFullYear(), currentTime.getMonth(),birthDateObj.getDate())

        );

        setAge({
            years:ageYears,
            months:ageMonths,
            days:ageDays
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        calculate(time)
    }
  return(
    <div className="display-age">
        <form className="ageform" onSubmit={handleSubmit}>
            <h1>AGE CALCULATOR</h1>
            <div>
            <input  type="date" value={time} onChange={handleChangeDate}/>
            </div>
            <button type="submit" disabled={!time} className = "btn">Calculate Age</button>
            
        </form>
        <p>You are {age.years} years old</p>
    </div>
  )
}
export default Age;