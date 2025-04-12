import React from 'react'
import { Toast ,ToastContainer} from 'react-bootstrap';
import { useState } from 'react';
import HeroSection from './HeroSection';
const Home = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div>Home


<HeroSection/>
</div>
  )
}

export default Home