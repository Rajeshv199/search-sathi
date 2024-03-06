// import React, { useState, useRef } from 'react';

// const OTPInput = ({ length = 6, onComplete }) => {
//   const [otp, setOtp] = useState(Array(length).fill(''));
//   const inputRefs = useRef([]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;

//     // Handle backspace to move focus to the previous input
//     if (e.key === 'Backspace' && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }

//     // Update OTP state
//     setOtp((prevOtp) =>
//       prevOtp.map((digit, i) => (i === index ? value : digit))
//     );

//     // Move focus to the next input
//     if (index < length - 1 && value !== '') {
//       inputRefs.current[index + 1].focus();
//     }

//     // If the last digit is entered, call the onComplete callback
//     if (index === length - 1 && value !== '') {
//       onComplete(otp.join(''));
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData('text/plain').slice(0, length);

//     // Update OTP state with pasted data
//     setOtp(pasteData.split(''));

//     // Move focus to the last input
//     inputRefs.current[length - 1].focus();
//   };

//   return (
//     <div>
//       {otp.map((digit, index) => (
//         <input key={index} type="text" inputMode="numeric" maxLength="1" value={digit} onChange={(e) => handleChange(e, index)}
//           onPaste={handlePaste}
//           ref={(ref) => (inputRefs.current[index] = ref)}
//         />
//       ))}
//     </div>
//   );
// };

// export default OTPInput;


import React, { useState, useRef } from 'react';

function OTPInput() {
  let length = 6;
  const [otp, setOtp] = useState(Array(length).fill(''));
 
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    // console.log(e.key);
    // Handle backspace to move focus to the previous input
    // if (e.key === 'Backspace' && index > 0) {
    //   // inputRefs.current[index - 1].focus();
    // }

    

    // Update OTP state
    setOtp((prevOtp) =>
      prevOtp.map((digit, i) => (i === index ? value : digit))
    );

    // Move focus to the next input
    if (index < length - 1 && value !== '') {
      inputRefs.current[index + 1].focus(); 
    }


  };

  function handleKeyPress(e,index){

    console.log(e.key,index);
    if (e.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    

   

  }



  return (
    <div>
      {otp.map((digit, index) => (
        <input key={index} type="text" inputMode="numeric" maxLength="1" value={digit} onChange={(e) => handleChange(e, index)}
           onKeyUp={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
