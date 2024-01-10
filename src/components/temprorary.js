// import React, { useState, useRef, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';

// function AllCompany() {
//   // const navigate = useNavigate();
//   const [expandedComponents, setExpandedComponents] = useState(['comp-0']); // Initialize with 'comp-0'

//   const toggleComponentVisibility = (prevTargetId, nextTargetId) => {
//     if (!expandedComponents.includes(nextTargetId)) {
//       setExpandedComponents([...expandedComponents, nextTargetId]);
//       scrollToComponent(nextTargetId);
//     } else {
//       setExpandedComponents(expandedComponents.filter((id) => id !== nextTargetId));
//       scrollToComponent(prevTargetId);
//     }
//   };

//   const scrollToComponent = (targetId) => {
//     const element = document.getElementById(targetId);
//     if (element) {
//       const scrollElement = document.getElementById(element.getAttribute('dataTarget'));
//       if (scrollElement) {
//         const windowHeight = window.innerHeight;
//         const elementPosition = scrollElement.getBoundingClientRect().top + window.pageYOffset;
//         const offset = .0; // Adjust this value to set the offset from the top
//          console.log(elementPosition)
//         window.scrollTo({
//           top: elementPosition - windowHeight * offset,
//           behavior: 'smooth',
//         });
//       }
//     }
//   };


//   return (
//     <div>
//     <div className='page-wraper'>
//       <div className='div'>
//         <div dataTarget='scroll-0' id='comp-0' className={`main-component mt-4`}>
//           <div id='scroll-0' style={{ height: '50vh' }} className='d-block bg-primary'>
//             comp-0
//           </div>
//           <button onClick={() => toggleComponentVisibility('comp-0', 'comp-1')} className='btn-thm'>
//             {expandedComponents.includes('comp-1') ? 'Show Less' : 'Show More'}
//           </button>
//         </div>

//         <div dataTarget='scroll-1' id='comp-1' className={`main-component ${expandedComponents.includes('comp-1') ? 'd-block' : 'd-none'} mt-4`}>
//           <div id='scroll-1' style={{ height: '50vh' }} className='d-block bg-primary'>
//             comp-1
//           </div>
//           <button onClick={() => toggleComponentVisibility('comp-1', 'comp-2')} className='btn-thm'>
//             {expandedComponents.includes('comp-2') ? 'Show Less' : 'Show More'}
//           </button>
//         </div>

//         <div dataTarget='scroll-2' id='comp-2' className={`main-component ${expandedComponents.includes('comp-2') ? 'd-block' : 'd-none'} mt-4`}>
//           <div id='scroll-2' style={{ height: '50vh' }} className='d-block bg-primary'>
//             comp-2
//           </div>
//           <button onClick={() => toggleComponentVisibility('comp-2', 'comp-3')} className='btn-thm'>
//             {expandedComponents.includes('comp-3') ? 'Show Less' : 'Show More'}
//           </button>
//         </div>
//         {/* Add more components similarly */}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AllCompany;


import {useRef} from 'react';
  export default function App() {
   


    return (
        <div>
          <h1>hello</h1>
        </div>
    );
  }