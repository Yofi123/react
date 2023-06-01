import React, {useState} from 'react'

import '/home/yofi/react/myapp/src/css/bmi.css'

function Bmi(){
    const[num1,setNum1] = useState("")
    const[num2,setNum2] = useState("")
    const[result,setResult] = useState("")
    const[checker,setChecker] = useState("")
  
    const handleWeight = (e) => {
      setNum1(e.target.value)
    }
    const handleHeight = (e) => {
      setNum2(e.target.value)
    }
    
    const calculation = (e) => {
      e.preventDefault();  //for page to not reload after the button is clicked
      let result = (parseFloat(num1)/(parseFloat(num2)*parseFloat(num2)))
      setResult(result.toFixed(2))
      if(result<18.5){
        setChecker("underweight")
      }else if(result>18.5 && result<24.9){
        setChecker("healthy")
      }else if(result>25.0 && result<29.9){
        setChecker("overweight")
      }else if(result>30.0){
        setChecker("obese")
      }
      
    }
   
    return (
      <div>
        <form className="form" onSubmit={calculation}>
          <h1 className="heading">BMI CALCULATOR</h1>
          <label>Enter your weight(kg):</label>
          <input htmlFor='' type="text" value={num1}
            onChange={handleWeight} />
          <label>Enter your height(m):</label>
          <input htmlFor="" type="text" value={num2} 
            onChange={handleHeight}/>
          <button type="submit">calculate</button>
        </form>
        <p className="display">Your BMI is {result}</p>
        <p className="display">you are {checker}</p>
      </div>
    )
  }
export default Bmi;  