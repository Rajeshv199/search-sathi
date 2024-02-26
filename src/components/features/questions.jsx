import { useState } from "react";

export default function Questions(props) {
  

    const{quesMark, quesTitle} = props;
    return (
        <div>
           <div className="quesContainer">
                <h4>{quesTitle} (All questions)</h4>
                {quesMark===1&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How does Yogjodi.com work?</span>
                        {/* <div className="text-dark">
                            <span>Q</span>
                            <span>How does Yogjodi.com work?</span>
                        </div> */}
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I register on Yogjodi.com?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>	Can someone register on behalf of his/her relative or friend?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>	Is Email Address required to create a profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I use same phone number for more than one profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How soon will my profile be visible in the search list?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I upload photos on my profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I change my Email address/ Phone number on the profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>I am unable to verify the Phone number, what should I do?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is registration Free of cost on Yogjodi?</span>
                    </div>
                   
                </div>
                }
                {quesMark===2&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I search profiles of my choice?</span>
                        {/* <div className="text-dark">
                            <span>Q</span>
                            <span>How does Yogjodi.com work?</span>
                        </div> */}
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I set my Partner Preference in the profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I filter out or restrict certain people to contact me?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I receive recommendations/alerts on my email address as well?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I know, who has visited my profile?</span>
                    </div>
                   
                </div>
                }
                {quesMark===3&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What are the benefits of upgrading to Paid membership?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I upgrade to Paid membership?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Are there any value added services?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I pay for membership with cash?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I pay for membership with cheque?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What is the difference between the Pro Lite and Pro Memberships?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What is JS Exclusive and its charges ?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I make payment online ?</span>
                    </div>
                    
                    
                   
                </div>
                }
                {quesMark===4&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I recognize and avoid Fraud?</span>
                    </div>
                </div>
                }
                {quesMark===5&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I getting very less matches on the site ?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I getting interests from outside my desired partner profile?</span>
                    </div>
                </div>
                }
                {quesMark===6&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I get good response on the site?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Where & how can I set my Desired Partner Preference?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I get better responses from people I contact?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Does a member’s last online status matter?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I also set the Privacy setting for my profile visibility on the site?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>I have added photographs and content on my profile and am still not getting good responses. Its also not showing on the site?</span>
                    </div>
                </div>
                }
                {quesMark===7&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I delete my Profile on Yogjodi?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I temporarily hide my profile?</span>
                    </div>
                </div>
                }
                {quesMark===8&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What is a Video Profile and its benefits?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How to shoot a good video?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Some suggestions on what you can talk about in the video profile</span>
                    </div>
                    
                </div>
                }
                {quesMark===9&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can a Free Member Chat without making a payment?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I Chat without getting an “Acceptance” from other person?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I Chat with Declined members?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is there a limit on number of profiles that Free member can chat with?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I send a message to profile where I am filtered?</span>
                    </div>
                    
                </div>
                }
                {quesMark===10&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>I am getting irrelevant calls. How can I hide my Phone Number on Yogjodi?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I keep a control over who all can visit my profile on the site?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Can I also hide my Phone number, photograph, etc.?</span>
                    </div>
                </div>
                }
                {quesMark===11&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I initiate contact with the desired people?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is there any limit to the number of Interests I can send?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I view the phone number/Email of the prospect?</span>
                    </div>
                </div>
                }
                {quesMark===12&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I login and logout from Yogjodi.com?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>I forgot my Password, how can I reset?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I change the Password?</span>
                    </div>
                </div>
                }
                {quesMark===13&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How can I contact Yogjodi team?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I asked to verify my profile?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I not able to change my Gender, Religion, Date of Birth or Marital status?</span>
                    </div>
                   
                </div>
                }
                {quesMark===14&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I not able to change my Gender, Religion, Date of Birth or Marital status?</span>
                    </div>
                   
                </div>
                }
                {quesMark===15&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What are Add-on services/consumable plans?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What Add-on services does Yogjodi.com provide?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>I found my life partner. Now can I use this profile for my family/relative/friend?</span>
                    </div>
                   
                </div>
                }
                {quesMark===16&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What is Yogjodi Match Hour and how to attend this event?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How to chat with members during the Match Hour?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How to use Video Chat option during the Match Hour?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Video Chat not working during the Match Hour?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What will be the timing of the Match Hour?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is Match Hour available for Native or Current City?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>What are free passes and how do they work?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is the event free or there are some hidden charges?</span>
                    </div>
                   
                </div>
                }
                {quesMark===17&&
                <div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>How do I verify my profile myself through government IDs?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Is my data safe?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I being asked for selfie verification?</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Top Errors to watch out for during selfie verification</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why am I being asked to upload a photo? I haven't uploaded any photos on Yogjodi.</span>
                    </div>
                    <div className="quesList">
                        <span>Q</span>
                        <span>Why should I verify my profile?</span>
                    </div>
                   
                </div>
                }
                


            </div>  
                
        
    </div>
    )
}