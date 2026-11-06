import { useState } from 'react'
import './App.css'

// const circleStyle ={
//   display : 'flex',
//   justifyContent : 'space-around',
//   listStyleType : 'none',
// }

// const liStyle ={
//    listStyleType : 'none',
//    borderRadius: '50%',
//    width: '50px',
//    height: '50px',
//    backgroundColor : 'grey',
//    color: 'black',
//    display: 'flex',
//    alignItems: 'center',
//    justifyContent : 'center',
// }

// const data = [
//   "Step 1: Learn React",
//   "Step 2: Earn From Development",
//   "Step 3: Invest Your Income",

// ]

// function App() {
  
//   const [step, setStep] = useState(1)

//   const previousHandler =() => {
//     if(setStep>1){
//       step(step - 1)
//     }else{
//       setStep(3)
//     }
  
//   }
  
//   const nextHandler = () =>{
//     // setStep(step + 1)
//    step<3 ? setStep(step + 1) : setStep(1)
    
//   }

//   return (
//     <>
//   <div id="firstDiv">
//   <ul style={circleStyle}>
//     <li style={
//       {
//         ...liStyle,//rest operator
//         backgroundColor : step == 1 ? 'blue' :'grey',
//         color : step == 1 ? 'white' :'black'

//       }
//     }>1</li>
//     <li style={
//       {
//         ...liStyle,//rest operator
//         backgroundColor : step == 2 ? 'blue' :'grey',
//         color : step == 2 ? 'white' :'black'

//       }
//     }>2</li>
//     <li style={
//       {
//         ...liStyle,//rest operator
//         backgroundColor : step == 3 ? 'blue' :'grey',
//         color : step == 3 ? 'white' :'black'

//       }
//     }>3</li>
//   </ul>
//   </div>
//   <div id="secondDiv">
//    <h1 >{data[step-1]}</h1>
//   </div>
//   <div id="btns">
//     <button onClick={previousHandler}>Previous</button>
//     <button onClick={nextHandler}>Next</button>
//   </div>
  

//     </>


//   )
// }

// export default App


function App() {

 const [step, setStep] = useState(1)
 const [count, setCount] = useState(0);

const divs ={
  display: 'flex',
  justifyContent: 'space-around'
}


const btnStyle ={
  width :'100px',
  fontSize:'30px',
  borderRadius:'20px',
}
const stepMinus= () =>{
    setStep(step - 1 );
}
const stepPlus= () =>{
 setStep(step + 1 );
}

  const countMinus = () => {
     setCount((s) =>s - step);
  };

  const countPlus = () => {
     setCount((s) =>s + step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const formattedDate = date.toLocaleDateString();

  return (
    <>
    <div id="steps" style={divs}>
      <button onClick={stepMinus} style={btnStyle}>-</button>
      <h1 >Step:{step}</h1>
      <button onClick={stepPlus} style={btnStyle}> +</button>
    </div><br />

    <div id="counts" style={divs}>
      <button onClick={countMinus} style={btnStyle}>-</button>
      <h1>Count:{count}</h1>
      <button onClick={countPlus} style={btnStyle}>+</button>
    </div><br />

    <h1>Today is {formattedDate}</h1>
    </>
  )
}

export default App