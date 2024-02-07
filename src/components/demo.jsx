import React, { useState, useRef, useEffect,useCallback } from 'react';

function PartnerForm(){

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);

    const [showPop,setShowPop] = useState(-1);

    const [takeData,setTakeData] = useState({maritalStatus:[],motherToung:[]})
  
    function handleChange(e){
        const {currentTarget: input} = e;
        let takeData1 = {...takeData};
        input.type === "checkbox"?
        (takeData1[input.name] = updateCBs(takeData1[input.name],input.checked,input.value)):
        (takeData1[input.name] = input.value);
        setTakeData(takeData1);

    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }
//   custom sonu /////////////////////
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);

let item1ref = useRef(null);
let item2ref = useRef(null);

const toggle = useCallback((dropdownNumber) => {
  if (dropdownNumber === 1) {
    setIsOpen1((prevIsOpen) => !prevIsOpen);
    setIsOpen2(false); 
  } else if (dropdownNumber === 2) {
    setIsOpen2((prevIsOpen) => !prevIsOpen);
    setIsOpen1(false); 
  }
}, []);

useEffect(() => {
  const handleOutsideClick = (e) => {
    console.log(e.target);
    if (isOpen1 && item1ref.current && !item1ref.current.contains(e.target)) {
      setIsOpen1(false);
    }
    if (isOpen2 && item2ref.current && !item2ref.current.contains(e.target)) {
      setIsOpen2(false);
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [isOpen1, isOpen2]);

    function multiCheckbox(manArr,name,arr){
        return(
        <div className={"multiCheckbox "+(arr[0]?"":"top35") }>
            {manArr.map((a1,index)=>(
                <label key={index}>
                    <input type="checkbox" name={name} value={a1} checked={arr.find((tk)=>tk===a1)} onChange={handleChange} />
                    {a1}
                </label>
            ))}
        </div>
        )
    }
  
   
    let maritalStutArr=["Never Married","Awaiting Divorce","Divorced","Widowed"];
    let motherTongues = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"];
    
    const {maritalStatus,motherToung} = takeData;

    const regiSecle4={
        position: "relative",
        minHeight:" 46px",
        width: "500px",
        backgroundColor: "#fff",
        border: "1px solid #d9d9d9",
        borderRadius: "2px",
        padding: "10px 0",
    }
    const multiValue = {
        backgroundColor: "#ddd9d9",
        borderRadius: "2px",
        float: "left",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: "14px",
        /* padding: 2px 4px; */
        margin: "2px 0 2px 6px",
    }

    return(
        <div className='container mt-4'>
            <div className=" " ref={item1ref}>
                <div  >
                    <label>Marital status</label>
                    <div style={regiSecle4} onClick={() =>toggle(1)} >{maritalStatus.map((m1,index)=>(
                        <div style={multiValue} key={index}><span>{m1}</span><i className="fa-solid fa-xmark" ></i></div>
                        ))}
                    </div>
                    {isOpen1 &&  <div >{multiCheckbox(maritalStutArr,"maritalStatus",maritalStatus)}</div>}
                </div>
            </div>
            <br/>  <br/> <br/>
            <div className="" ref={item2ref}>
                <div onClick={() =>toggle(2)} >
                    <label  >Marital Tongue</label>
                    <div style={regiSecle4}  >{motherToung.map((m1,index)=>(
                        <div style={multiValue} key={index}><span>{m1}</span><i className="fa-solid fa-xmark"></i></div>
                                    ))}
                    </div>
                    {isOpen2 &&  <div >{multiCheckbox(motherTongues,"motherToung",motherToung)}</div>}
                </div>
            </div>


        </div>  
    );
 }

export default PartnerForm;


