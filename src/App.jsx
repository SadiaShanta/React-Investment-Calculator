import { useState } from "react"
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1000,
    expectedReturn : 6,
    duration : 5,
});

const inputIsValid= userInput.duration > 0;

function handleChange (inputIdentifier, newValue){
    setuserInput((prevUserInput)=>{ //spreading the old userInput state object into this new object
        return{
            ...prevUserInput, //copy all the old values into this new object.
            [inputIdentifier]: +newValue, // just override one single property of that object.
        };
    });
}
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/> 
      {!inputIsValid && <p class="center">Please enter a duration greater than zero</p> }
      {inputIsValid && <Results input={userInput}/>}
    </>

  );
}

export default App
