import { useState, createRef, useEffect } from "react";

const GameLine = (props) => {
  const lineIndex = props.index;
  // number of inputs
  const numerOfInputs =  6;

  // create a array of refs
  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );

  // state for current input index
  const [currentIndex, setCurrentIndex] = useState(0);

  // save letters in a array where each entry in the array refers to an input
  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );

  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      // calculate the next input index, next input after the final input will be again the first input. you can change the logic here as per your needs
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };

  useEffect(() => {
    // focus the firs iput initially
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }
    
    // add the event listener for keyup keyboard event
    window.addEventListener("keyup", handleKeyPress, false);
    
    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div>
      {inputRefsArray.map((ref, index) => {
        return (
          <input className="inputopt" ref={ref} type="text" id={`box${index}-1`} onChange={(e) => {const { value } = e.target;
              setLetters((letters) =>
                letters.map((letter, letterIndex) =>
                  letterIndex === index ? value : letter
                )
              );
            }}
            onClick={(e) => {setCurrentIndex(index); e.target.select();}} value={letters[index]} max={"1"}
          />
        );
      })}
    </div>
  );
};

export default GameLine;



// import React, { useRef, useState } from 'react';

// const YourComponent = () => {
//   const inputRefs = [useRef(null), useRef(null), useRef(null)]; // Add refs for each input
//   const [currentInputIndex, setCurrentInputIndex] = useState(0);

//   const handleKeyPress = (event) => {
//     // if (event.key === 'Enter') {
//       // If "Enter" key is pressed
//       const nextIndex = currentInputIndex + 1;

//       // Check if there is a next input
//       if (nextIndex < inputRefs.length) {
//         // Focus on the next input
//         inputRefs[nextIndex].current.focus();

//         // Update the current input index
//         setCurrentInputIndex(nextIndex);
//       }
//     // }
//   };

//   return (
//     <div>
//       {inputRefs.map((inputRef, index) => (
//         <input type='number' key={index} ref={inputRef} onKeyDown={handleKeyPress} />
//       ))}
//     </div>
//   );
// };

// export default YourComponent;