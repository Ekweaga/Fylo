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
                    <div>
                            <img src={acess}/>
                    </div>
                    <div>
                            <img src={any}/>
                    </div>
                    <div>
                            <img src={colla}/>
                    </div>
                    <div>
                            <img src={sec}/>
                    </div>
                </div>
    <div className='prod'>
        <div className='prod1' >
            <img src={mgs}/>
            <div><h1>Stay Productive,wherever you are</h1>
            <p>Never let location be an issue when accessing your files. We got you coveredfor all your files storage needs</p>
           <p>Securely share files and folders with friends,families and collegaues for live collaboration . No email attachments required</p>
            </div>
        </div>
    </div>
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
    </>
  )
}

export default Home