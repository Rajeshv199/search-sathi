import React, { useState, useRef, useEffect } from 'react';

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(dropdown1Ref.current.contains(event.target));
            console.log(dropdown2Ref.current.contains(event.target));
          if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
            // Clicked outside dropdown 1, close it
            setShowPop(-1);
          }
          if (dropdown2Ref.current && dropdown2Ref.current.contains(event.target)) {
            // Clicked outside dropdown 2, close it
            setShowPop(-1);
          }
        };
    
        // Attach the event listener to the document
        document.addEventListener('click', handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);


      

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
    let motherToungs = ["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu"];
    
    const {maritalStatus,motherToung} = takeData;

    return(
        <div className='container'>
            <div className="regi-detailw" ref={dropdown1Ref}>
                <div className={"regi-secle4 float-left mt20"} onClick={() =>{setlabel1(true);setShowPop(1)}} >
                    <label className={"reg-label top8 " +(label1?"reg-mobile":"")} >Marital status</label>
                    <div className="">{maritalStatus.map((m1,index)=>(
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" ></i></div>
                        ))}
                    </div>
                    {label1 && showPop===1 &&  <div >{multiCheckbox(maritalStutArr,"maritalStatus",maritalStatus)}</div>}
                </div>
            </div>
            <div className="regi-detailw" ref={dropdown2Ref}>
                <div className={"regi-secle4 float-left mt20"} onClick={() =>{setlabel2(true);setShowPop(2)}} >
                    <label className={"reg-label top8 " +(label2?"reg-mobile":"")} >Marital status</label>
                    <div className="">{motherToung.map((m1,index)=>(
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark"></i></div>
                                    ))}
                    </div>
                    {label2 && showPop===2&&  <div >{multiCheckbox(motherToungs,"motherToung",motherToung)}</div>}
                </div>
            </div>
        </div>  
    );
 }

export default PartnerForm;


