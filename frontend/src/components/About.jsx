import React, { useState } from 'react'

const About = () => {
  const [signup,setSignup]=useState(false);
  {console.log("about is rednering...")}
  return (
    <div>About
      {signup&&<button>ok signuped</button>}

      <button onClick={()=>{console.log("hello");
      setSignup(true);
      }}>hello</button>
   
    </div>
  )
}

export default About