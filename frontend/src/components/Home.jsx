import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import HeroSection from './HeroSection';
import Subscribe from './Subscribe';
import LatestCollection from './LatestCollection';
import { useHomeQuery } from '../redux/homeApiSlice';
const Home = () => {
  const [showToast, setShowToast] = useState(false);
  const { data, error, isLoading } = useHomeQuery();
  if (!isLoading) { console.log(data); }
  console.log("Home component isd being laoded?");

  return (
    <div>
      <HeroSection />
      {!isLoading && !error &&
        <div >
          <LatestCollection data={data["latest_products"]} heading={"LATEST COLLECTIONS"} title={"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."} />
          <LatestCollection data={data["best_sellers"]} heading={"BEST SELLERS"} title={"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."} />
        </div>
      }
      <Subscribe />
    </div>
  )
}

export default Home