import React from 'react'
import { Toast ,ToastContainer} from 'react-bootstrap';
import { useState } from 'react';
import HeroSection from './HeroSection';
import Subscribe from './Subscribe';
import LatestCollection from './LatestCollection';

const Home = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div>
<HeroSection/>
<LatestCollection/>
<Subscribe/>
</div>
  )
}

export default Home