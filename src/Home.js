import React from 'react'
import mg from './images/illustration-intro.png'
import mgs from './images/illustration-stay-productive.png'
import acess from './images/icon-access-anywhere.svg'
import any from './images/icon-any-file.svg'
import colla from './images/icon-collaboration.svg';
import sec from './images/icon-security.svg'
import profile1 from './images/profile-1.jpg'
import profile2 from './images/profile-2.jpg'
import profile3 from './images/profile-3.jpg'
import './home.css';
import email from './images/icon-email.svg';
import phone from './images/icon-phone.svg';
import quote from './images/bg-quotes.png'

function Home() {
  return (
   <> <div>
        <div className='head'>
            <img src={mg}/>

        </div>
    </div>
    <div className='bg'>
        <div>
            <h1>All files in one secure location, accessible everywhere</h1>
            <p>We stores all your most important files in one secure location, access them whenever you need,share and collaborate with 
                friends,families and co-workers</p>
                <div>
                    <button>Get Started</button>
                </div>
              
        </div>

    </div>

    <div className='ft'>
        <div className='fets'>
                    <div className='fet'>
                            <img src={acess}/>
                            <div>
                                <h1>Access your files,anywhere</h1>
                                <p>The ability to use a smartphone , tablet or computer to access your account means your files follow 
                                    you everywhere
                                </p>
                            </div>

                    </div>
                    <div className='fet'>
                            <img src={any}/>
                            <div>
                                <h1>Store any type of file</h1>
                                <p>Whether you are sharing holidays photos or work documents , Fylo gat you covered allowing formall files types
                                    to be securely stored and saved
                                </p>
                            </div>
                    </div></div>
                    <div className='fets'>
                    <div className='fet'>
                            <img src={colla}/>
                            <div>
                                <h1>Real-time collaboration</h1>
                                <p>
                                    Securelyshare files and folders with friends, families for live collaboration. No email attachments required
                                </p>
                            </div>
                    </div>
                    <div className='fet'>
                            <img src={sec}/>
                            <div><h1>Security you can trust</h1>
                            <p>
                                Authentication and user-controlled encryption are a couple of security options given</p></div>
                    </div>
                </div></div>
    <div className='prod'>
        <div className='prod1' >
            <img src={mgs}/>
            <div><h1>Stay Productive,wherever you are</h1>
            <p>Never let location be an issue when accessing your files. We got you coveredfor all your files storage needs</p>
           <p>Securely share files and folders with friends,families and collegaues for live collaboration . No email attachments required</p>
            </div>
        </div>
    </div>
    <div style={{width:'50px',float:'left'}} className="quote">
    <img src={quote} style={{width:'50px'}} />
    </div><br/>
   
<div className='comments'>
    <div>
           <section>
               <p>
                    Fiylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomed a well-oiled collaboration machine
               </p>
               
              <div className='imgsec'> <img src={profile1}/><main><b>Johnson</b><span style={{fontSize:'10px'}}>Product Designer</span></main></div>

               
               </section>
    </div>
    <div>
        <section>
            <p>
            Fiylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomed a well-oiled collaboration machine
            </p>
            <div className='imgsec'> <img src={profile2}/><main><b>Johnson</b><span style={{fontSize:'10px'}}>Founder & CEO</span></main></div>
           
        </section>
   
</div>
<div>
    <section>
        <p>
        Fiylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomed a well-oiled collaboration machine
        </p>
  <div className='imgsec'><img src={profile3}/><main><b>Ivya Boyd</b><span style={{fontSize:'10px'}}>Marketer</span></main></div>  
    </section>

</div>
</div>
<footer>
    <div className='contact'>
        <div>
            <h1>Get early access today</h1>
            <p>It only take a minute to sign up and our free starter is very generous
                If you have any questions, do well to make it known to us
            </p></div>
            <div>
                <input type="email" placeholde="email@gmail.com"/> <button>Send</button>
        </div>

    </div>
    
    <div className='footer'>
        <div className='h1'>
            <h1>
                FYLO
            </h1>
            <p>We stores all your most important files in one secure location, access them whenever you need,share and collaborate with 
                friends,families and co-workers</p>
        </div>
        <div>
            <img src={email}/> hikay133@gmail.com
            <br/>
            <img src={phone}/> 08148837221
        </div>
        <div>
            <ul>
                <li>About Us</li>
                <li>Home</li>
                <li>Start</li>
            </ul>
        </div>
        <div>
        <ul>
                <li>About Us</li>
                <li>Home</li>
              
            </ul>
        </div>
       

    </div>
</footer>
    </>
  )
}

export default Home