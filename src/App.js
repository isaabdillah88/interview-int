import { useState } from 'react';
import './styles.css';

export default function App() {
  const [numberValue, setNumberValue] = useState('');
  const [numberDifference, setNumberDifference] = useState(0);

  // function to get reverse number of user input
  function reverseNumber(oldNumber) {
    let newNumber = '';

    for (let i = oldNumber.length - 1; i >= 0; i--) { 
      newNumber += oldNumber[i];
    }

    return newNumber;
  }

  // function to set user input number into numberValue variable
  function handleChange(event) {
    setNumberValue(event.target.value);
  }

  // function to prevent the user from inputting anything other than integer numbers
  function handleKeyDown(event) {
    const keyCode = (event.which) ? event.which : event.keyCode;
    
    if (
      (!numberValue && keyCode === 48) || 
      (keyCode > 31 && (keyCode < 48 || keyCode > 57))
    ) {
      event.preventDefault();
    }
  }

  // function to get the difference number between user input number and its reverse
  function handleSubmit() {
    let result = 0;

    if (!numberValue) {
      alert('Number can not be empty!');
    } else {
      const newNumberValue = numberValue.replace(/[^0-9-]/g, ''); // remove dot and comma
      const reverseNumberValue = reverseNumber(newNumberValue);
      result = Math.abs(+newNumberValue - +reverseNumberValue); // the result will always be positive
    }
    
    setNumberDifference(result);
  }

  return (
    <div className="App">
      <div className="mb-5">
        Number: 
        <input
          type="text"
          className="mrl-5"
          value={numberValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        Result: {numberDifference}
      </div>
    </div>
  );
}
