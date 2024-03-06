import React, { useState,useRef,useEffect } from "react";
import { useHistory } from "react-router-dom";


function PartnerForm() {
    const history = useHistory();
    // window.scrollTo(0,0);

    const [label1, setlabel1] = useState(false);
    const [label2, setlabel2] = useState(false);
    const [label3, setlabel3] = useState(false);
    const [label4, setlabel4] = useState(false);
    const [label5, setlabel5] = useState(false);
    const [label6, setlabel6] = useState(false);
    const [label7, setlabel7] = useState(false);
    const [label8, setlabel8] = useState(false);
    const [label9, setlabel9] = useState(false);
    const [label10, setlabel10] = useState(false);
    const [label11, setlabel11] = useState(false);
    const [label12, setlabel12] = useState(false);

    const [showPop, setShowPop] = useState(-1);

    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(30);
    const [minHeight, setMinHeight] = useState(`4' 0" (1.22 mts)`);
    const [maxHeight, setMaxHeight] = useState(`7' (2.13 mts) plus'`);
    const [takeData, setTakeData] = useState({ maritalStatus: [], motherToung: [], country: [], state: [], skill: [], board: [], occupation: [] })

    // const [motherToung, setMotherToung] = useState([]);
    const [minQalification, setMinQalification] = useState("");
    const [maxQualification, setMaxQualification] = useState("");
    const [income, setIncome] = useState("");
    const [descAboutPartner, setDescAboutPartner] = useState("");

    let item1ref = useRef(null);

    function handleSave() {
        history.push("/partner");

    }
    function handleChange(e) {
        const { currentTarget: input } = e;
        let takeData1 = { ...takeData };
        input.type === "checkbox" ?
            (takeData1[input.name] = updateCBs(takeData1[input.name], input.checked, input.value)) :
            (takeData1[input.name] = input.value);
        setTakeData(takeData1);

    }
    function updateCBs(inpArr, checked, value) {
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (item1ref.current && !item1ref.current.contains(e.target)) {
            setShowPop(-1);
          }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);


    function handleDelete(arr, value) {
        let takeData1 = { ...takeData }
        let index = arr.findIndex((ele) => ele === value);
        if (index >= 0) arr.splice(index, 1);
        setTakeData(takeData1);
    }
    function multiCheckbox(manArr, name, arr) {
        return (
                <div className="multiCheckbox">
                    {manArr.map((a1, index) => (
                        <label key={index}>
                            <input type="checkbox" name={name} value={a1} checked={arr.find((tk) => tk === a1)} onChange={handleChange} />
                            {a1}
                        </label>
                    ))}
            </div>
            
        )
    }

    let ageArr = [];
    for (let i = 18; i <= 70; i++) ageArr.push(i);
    let heights = [];
    for (let i = 0; i < 10; i++)heights.push(`4' ${i}" (1.22 mts)`);
    // let maritalStatusArr=["Never Married","Awaiting Divorce","Divorced","Widowed"];

    let maritalStutArr = ["Never Married", "Awaiting Divorce", "Divorced", "Widowed"];
    let countries = ["Russia", "Canada", "China", "US of America", "Brazil", "Australia", "India", "Argentina", "Kazakhstan", "Algeria"];
    let skills = ["Problem solving", "Communication", "Interpersonal", "Time management"];
    let occupations = ["Engineer", "Architect", "Scientist", "Teacher", "Technician", "Civil engineer", "Electrical engineer", "Psychologist"];
    let incomeArr = ["No Income", "Rs. 1 - 2 Lakh", "Rs. 2 - 3 Lakh", "Rs. 3 - 4 Lakh", "Rs. 4 - 5 Lakh"]
    let borads = ["CBSE", "Jharkhand Board", "CISCE", "State Boards", "ICSE"]

    let motherToungs = ["Assamese", "Bengali", "Bodo", "Dogri", "Gujarati", "Hindi", "Kannada", "Kashmiri", "Maithili", "Malayalam", "Manipuri", "Marathi", "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindhi", "Tamil", "Telugu", "Urdu"];

    const { maritalStatus, motherToung, country, state, skill, board, occupation } = takeData;

    return (
        <div ref={item1ref}>
            <div className="regi-detail" >
                <div className="regi-secle" onClick={() => { setlabel1(true) }}>
                    <label className={"reg-label " + (label1 ? "reg-Age" : "")}>Age</label>
                    {label1 ?
                        <ul className="multiSelected d-flex">
                            <li onClick={() => setShowPop(1)}>
                                <div >
                                    <span>{minAge ? minAge + " years" : "min age"}</span>
                                    <i className={showPop === 1 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>
                            <li onClick={() => setShowPop(2)}>
                                <div >
                                    <span>{maxAge ? maxAge + " years" : "max age"}</span>
                                    <i className={showPop === 2 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>

                        </ul> : null}
                    <div className={showPop === 1 ? "dropBox width380 postionBox" : "daysBox2"}>
                        <ul>
                            {ageArr.map((d1, index) => <li className={"width38 " + (minAge === d1 ? "box1" : "")} onClick={() => { setShowPop(-1); setMinAge(d1); d1 > maxAge ? setMaxAge(d1) : setMaxAge(maxAge) }} key={index}>{d1}</li>)}
                        </ul>
                    </div>
                    <div className={showPop === 2 ? "dropBox width380 postionBox2" : "monthsBox2"}>
                        <ul>
                            {ageArr.map((m1, index) => <li className={"width38 " + (minAge < m1 ? "" : "color11 ") + (maxAge === m1 ? "optActive " : "")} onClick={minAge < m1 ? () => { setShowPop(-1); setMaxAge(m1) } : null} key={index}>{m1}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle mt20" onClick={() => { setlabel2(true) }}>
                    <label className={"reg-label top8 " + (label2 ? "reg-State" : "")}>Height</label>
                    {label2 ?
                        <ul className="multiSelected d-flex">
                            <li onClick={() => setShowPop(3)}>
                                <div >
                                    <span>{minHeight ? minHeight : "min height"}</span>
                                    <i className={showPop === 3 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>
                            <li onClick={() => setShowPop(4)}>
                                <div >
                                    <span>{maxHeight ? maxHeight : "max height"}</span>
                                    <i className={showPop === 4 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>

                        </ul> : null}
                    <div className={showPop === 3 ? "dropBox width380 postionBox" : "daysBox2"}>
                        <ul>
                            {heights.map((d1, index) => <li className={"width156 border-0  " + (minHeight === d1 ? "box1" : "")} onClick={() => { setShowPop(-1); setMinHeight(d1); d1 > maxHeight ? setMaxHeight(d1) : setMaxHeight(maxHeight) }} key={index}>{d1}</li>)}
                        </ul>
                    </div>
                    <div className={showPop === 4 ? "dropBox width380 postionBox2" : "monthsBox2"}>
                        <ul>
                            {heights.map((m1, index) => <li className={"width156 border-0 " + (minHeight < m1 ? "" : "color11 ") + (maxHeight === m1 ? "optActive " : "")} onClick={minHeight < m1 ? () => { setShowPop(-1); setMaxHeight(m1) } : null} key={index}>{m1}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel3(true); setShowPop(5) }}>
                    <label className={"reg-label top8 " + (label3 ? "reg-mobile" : "")} onClick={() => setShowPop(5)}>Marital status</label>
                    <div >{maritalStatus.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(maritalStatus, m1)}></i></div>
                    ))}
                    </div>
                    {/* <Select isMulti={true} value={minAge} onChange={setMinAge}  options={aaAw}/> */}
                    {label3 && showPop === 5 ? multiCheckbox(maritalStutArr, "maritalStatus", maritalStatus) : null}
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel4(true); setShowPop(6) }}>
                    <label className={"reg-label top8 " + (label4 ? "reg-label7" : "")} onClick={() => setShowPop(6)}>Country</label>
                    <div className="">{country.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(country, m1)}></i> </div>
                    ))}
                    </div>
                    {label4 && showPop === 6 ? multiCheckbox(countries, "country", country) : null}
                </div>
            </div>
            {country &&
                <div className="regi-detail">
                    <div className="regi-secle4 mt20" onClick={() => { setlabel5(true); setShowPop(7) }}>
                        <label className={"reg-label top8 " + (label5 ? "reg-State2" : "")} onClick={() => setShowPop(7)}>State</label>
                        <div className="">{state.map((m1, index) => (
                            <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(state, m1)}></i></div>
                        ))}
                        </div>
                        {label5 && showPop === 7 ? multiCheckbox(countries, "state", state) : null}
                    </div>
                </div>
            }
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel6(true); setShowPop(8) }}>
                    <label className={"reg-label top8 " + (label6 ? "reg-label6" : "")} onClick={() => setShowPop(8)}>Mother tongue</label>
                    <div className="kloikl">{motherToung.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(motherToung, m1)}></i></div>
                    ))}
                    </div>
                    {label6 && showPop === 8 ? multiCheckbox(motherToungs, "motherToung", motherToung) : null}
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel7(true); setShowPop(9) }}>
                    <label className={"reg-label top8 " + (label7 ? "reg-Age" : "")} onClick={() => setShowPop(9)}>Skill</label>
                    <div className="">{skill.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(skill, m1)}></i></div>
                    ))}
                    </div>
                    {label7 && showPop === 9 ? multiCheckbox(skills, "skill", skill) : null}
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel8(true); setShowPop(10) }}>
                    <label className={"reg-label top8 " + (label8 ? "reg-borad" : "")} onClick={() => setShowPop(9)}>Borad</label>
                    <div className="">{board.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(board, m1)}></i></div>
                    ))}
                    </div>
                    {label8 && showPop === 10 ? multiCheckbox(borads, "board", board) : null}
                </div>
            </div>

            <div className="regi-detail">
                <div className="regi-secle mt20" onClick={() => { setlabel9(true) }}>
                    <label className={"reg-label top8 " + (label9 ? "reg-famly" : "")}>Qualification</label>
                    {label9 ?
                        <ul className="multiSelected d-flex">
                            <li onClick={() => setShowPop(10)}>
                                <div >
                                    <span>{minQalification ? minQalification : "min qalification"}</span>
                                    <i className={showPop === 2 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>
                            <li onClick={() => setShowPop(11)}>
                                <div >
                                    <span>{maxQualification ? maxQualification : "max qualification"}</span>
                                    <i className={showPop === 3 ? "iconArrow iconPostion" : ""}></i>
                                </div>
                            </li>

                        </ul> : null}
                    <div className={showPop === 2 ? "dropBox width380 postionBox" : "daysBox2"}>
                        <ul>
                            {heights.map((d1, index) => <li className={"width156 border-0  " + (minQalification === d1 ? "box1" : "")} onClick={() => { setShowPop(-1); setMinQalification(d1) }} key={index}>{d1}</li>)}
                        </ul>
                    </div>
                    <div className={showPop === 3 ? "dropBox width380 postionBox2" : "monthsBox2"}>
                        <ul>
                            {heights.map((m1, index) => <li className={"width156 border-0 " + (maxQualification === m1 ? "optActive " : "")} onClick={() => { setShowPop(-1); setMaxQualification(m1) }} key={index}>{m1}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="regi-detail">
                <div className="regi-secle4 mt20" onClick={() => { setlabel10(true); setShowPop(12) }}>
                    <label className={"reg-label top8 " + (label10 ? "reg-Occupat" : "")} onClick={() => setShowPop(12)}>Occupation</label>
                    <div className="">{occupation.map((m1, index) => (
                        <div className="multiValue" key={index}><span>{m1}</span><i class="fa-solid fa-xmark" onClick={() => handleDelete(occupation, m1)}></i></div>
                    ))}
                    </div>
                    {label10 && showPop === 12 ? multiCheckbox(occupations, "occupation", occupation) : null}
                </div>
            </div>

            <div className="regi-detail">
                <div className={"regi-secle mt20"} >
                    <label className={"reg-label top8 " + (label11 ? "reg-income" : "")} onClick={() => { setlabel11(true); setShowPop(13) }}>Income</label>
                    <input type="text" placeholder="" readOnly value={income} onClick={() => { setlabel11(true); setShowPop(13) }} />
                    {label11 && showPop === 13 ?
                        <React.Fragment>
                            <div className={"gridDropdown"}>
                                <i className={"imgArrow religionIcon"}></i>
                                <ul>
                                    {incomeArr.map((i1, index) => <li key={index} onClick={() => { setIncome(i1); setShowPop(-1) }}>{i1}</li>)}
                                </ul>

                            </div>
                        </React.Fragment>
                        : ""}
                </div>
            </div>
            <div className="regi-detail">
                <div className={"regi-secle2 mt20"} onClick={() => { setlabel12(true) }}>
                    <label className={"reg-label " + (label12 ? "reg-partnr" : "")} onClick={() => { setlabel12(true) }}>Describe About Partner</label>
                    {label12 ?
                        <textarea placeholder="You may consider answering these questions:
                                        1. How would you describe About Partner?
                                        2. What kind of food/movies/books/music you like?
                                        3. Do you enjoy activities like traveling, music, sports etc?
                                        4. Where have you lived most of your life till now?
                                        5. Where do you wish to settle down in future?" value={descAboutPartner} onChange={(e) => setDescAboutPartner(e.currentTarget.value)}></textarea>

                        : null}
                </div>
            </div>
            <div>
                <button className="saveBtn bg-danger" onClick={handleSave}>Continue</button>
                {/* <button className="showMoreBtn" onClick={handleShowMore}>Continue</button> */}
            </div>
        </div>

    );

}

export default PartnerForm;