import React,{ useState } from 'react';
import { Link, Prompt,useHistory } from 'react-router-dom';

import ProfileHeader from '../profile_layout/profileHeader';
import Leftaside from '../profile_layout/left_aside';

export default function LifeStyle() {
    const[LifeStyleData,setLifeStyleData] = useState({drinkingHabits:"Yes",dietaryHabits:"",smokingHabits:"",hobbies:[],interests:[],languages:[],favouriteMusic:[],movies:"",favouriteBooks:"",sports:[]})
    const[ispop,setIsPop] = useState(-1);
    const history = useHistory();

    function handleChange(e){
        const {currentTarget: input} = e;
        let LifeStyleData1 = {...LifeStyleData}
        input.type === "checkbox"?
        LifeStyleData1[input.name] = updateCBs(LifeStyleData1[input.name],input.checked,input.value):
        LifeStyleData1[input.name] = input.value;
        setLifeStyleData(LifeStyleData1);
    }
    function updateCBs(inpArr, checked, value){
        if(checked) inpArr.push(value);
        else{
            let index = inpArr.findIndex((ele)=> ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    function handleSelected(val,name){
        let LifeStyleData1 = {...LifeStyleData};
        LifeStyleData1[name]= val;
        setLifeStyleData(LifeStyleData1);
    }

    function closePopup(){
        setIsPop(-1)
    }

    function multiInputs2(label,value,no){
        return(
            <div className='custom-form'>
                <label>{label}</label>
                <input type='text' readOnly value={value.length<=3?value.join(", "):`${value[0]}, ${value[1]}, ${value[2]}, +${value.length-3}more`} onClick={()=>setIsPop(no)}/>
                
            </div>
        )
    }
    
    function multiCheckBox(title,arr,name,value){
        console.log(value);
        return(
            <div className="popup-box2">
                <div className="box5">
                    <div className="checkbox-Custom">
                        <h5 className='mb-2'>{title}</h5>
                        <ul className='select-item'>
                            {value.length<=3? value.map((v1,index)=><li key={index}>{v1}<i class="fa-solid fa-xmark fa-sm"></i></li>):
                            <React.Fragment>
                            <li>{value[0]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li>{value[1]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <li>{value[2]}<i class="fa-solid fa-xmark fa-sm"></i></li>
                            <div>+{value.length-3}more</div>
                            </React.Fragment>
                            }
                        </ul>
                        <div className='popContaner2'>
                            {arr.map((a1,index)=>(
                                <label key={index} >
                                    <input type='checkbox' name={name} value={a1} checked={value.findIndex((tech)=>tech===a1) >= 0} onChange={handleChange} />
                                    <div className='px-2'>{a1}</div>
                                </label>
                            ))}
                        </div>
                        <button className="submitopt2" onClick={()=>setIsPop(false)}>Done</button>
                        <button className="cancelBtn2" onClick={()=>setIsPop(false)}><i class="fa-solid fa-xmark fa-lg"></i></button>
                    </div>
                </div>
            </div>
        )
    }

    function handleClose(){
        
    }

    function handleSubmit(){
        history.push("/profile_edit")
    }

    let hobbyArr = ["Painting","Cooking","Photography","Fishing","Singing","Danceing","Acting","Graphology","Watching"];
    let interestsArr = ["Writing","Movies","Reading","Listening to music","Politics","Blogging","Travel","learning"];
    let languageArr = ["English","Hindi","Bangali","Marathi","Oriya","Punjabi","Tamil","Telugu","Urdu"];
    let favorteMusicArr = ["Old Song","Latest Song","Disco","Rap","Hip-Hop","Acid Rock","Reggae"];
    let sportArr = ["Cricket","Cycling","Hockey","Swimming","Football","Carrom","Chess","Card","Basketball","Tennis"];
    let drinkHabitsArr = ["Yes","No","Occasionally"];
    let dietryHabitsArr = ["Vegetarian","Non Vegetarian","Jain"];
    
    const{drinkingHabits,dietaryHabits,smokingHabits,hobbies,interests,languages,favouriteMusic,movies,favouriteBooks,sports}=LifeStyleData;
    console.log(drinkingHabits);

    return (
    <div className='profile-details' onClick={()=>handleClose()}>
        <ProfileHeader/>
        <div className='profile-detail-body'>
           <Leftaside/>

            <div className='profile-box p-4'>
                
                <div className='edit-header'>
                    <Link className='text-dark' to="/profile_edit"><i class="fa-solid mt-1 fa-chevron-left"></i></Link>
                    <h5 className='m-0'>LifeStyle Details</h5>
                    <div>Update these details to get suitable matches</div>
                </div>
                <div className=''>

                    <div className='custom-form'>
                        <label>Drinking Habits</label>
                        <div className='habitsOpt'>
                            {drinkHabitsArr.map((h1,index)=>(
                                <button className={drinkingHabits==h1?"bgcolor":""} onClick={()=>handleSelected(h1,"drinkingHabits")} key={index}>{h1}</button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form'>
                        <label>Dietary Habits</label>
                        <div className='habitsOpt'>
                            {dietryHabitsArr.map((h1,index)=>(
                                <button className={dietaryHabits==h1?"bgcolor":""} onClick={()=>handleSelected(h1,"dietaryHabits")} key={index}>{h1}</button>
                            ))}
                        </div>
                    </div>
                    <div className='custom-form w-75'>
                        <label>Smoking Habits</label>
                        <div className='habitsOpt'>
                            {drinkHabitsArr.map((h1,index)=>(
                                <button className={smokingHabits==h1?"bgcolor":""} onClick={()=>handleSelected(h1,"smokingHabits")} key={index}>{h1}</button>
                            ))}
                        </div>
                    </div>

                    {multiInputs2("Hobbies",hobbies,1)} 
                    {multiInputs2("Interests",interests,2)} 
                    {multiInputs2("Languages",languages,3)} 
                    {multiInputs2("Favourite Music",favouriteMusic,4)} 

                    <div className='custom-form'>
                        <label>Movies</label>
                        <input type='text' name='movies' value={movies} onChange={handleChange}/>
                    </div>
                    <div className='custom-form'>
                        <label>Favourite Books</label>
                        <input type='text' name='favouriteBooks' value={favouriteBooks} onChange={handleChange}/>
                    </div>
                    {multiInputs2("Sports",sports,5)} 
                   
                    <div className="saveBtn2">
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {ispop==1?multiCheckBox("Hobbies",hobbyArr,"hobbies",hobbies):null}
            {ispop==2?multiCheckBox("Interests",interestsArr,"interests",interests):null}
            {ispop==3?multiCheckBox("Languages",languageArr,"languages",languages):null}
            {ispop==4?multiCheckBox("Favourite Music",favorteMusicArr,"favouriteMusic",favouriteMusic):null}
            {ispop==5?multiCheckBox("Sports",sportArr,"sports",sports):null}
        </div>

    </div>
)
}