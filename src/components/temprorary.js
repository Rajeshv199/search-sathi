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


import {useRef,Component} from 'react';
class App extends Component{
   
  state={
    table:[{name:"name",rolno:23},{name:"name2",rolno:25}]
  }

  handleSubmit=()=>{
    let s1 = {...this.state};
    let lenw = s1.table.length-1;
    let len2 = s1.table[lenw].name.length-1;
    let val = s1.table[lenw].name.substring(len2);
    
    let jon={name:`name${+val+ +1}`,rolno:255};
    s1.table.push(jon)
    this.setState(s1);
    console.log(val);
  }

  handleDelete=(name)=>{
    let s1 = {...this.state};
    let index = s1.table.findIndex(t1=>t1.name==name);
    if(index>=0){
      s1.table.splice(index,1);
    }
    this.setState(s1);
  }
  render(){
    const{table} = this.state;
    return (
        <div className='container'>
              <div className='row'>
                <div className='col-3 border bg-dark text-white'>Name</div>
                <div className='col-3 border bg-dark text-white'>Roll No</div>
              </div>
          {table.map((t1,index)=>(
            <div >
              
                <div className='row'>
                <div className='col-3 border' onClick={()=>this.handleDelete(t1.name)}>{t1.name}</div>
                <div className='col-3 border'>{t1.rolno}</div>


              </div>
              
            </div>
          ))}
            <button className='btn btn-success my-3' onClick={()=>this.handleSubmit()}>submit</button>

        </div>

      
  );

  }
    
  }
  export default App;