import { useState,useRef } from 'react';
import HeroSection from './HeroSection';
import LatestCollection from './LatestCollection';
import { useHomeQuery } from '../redux/apiSlice';

const Home = () => {
  const { data, error, isLoading } = useHomeQuery();
  const latestRef = useRef(null);
  const handleShopNowClick = () => {
    latestRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  if (!isLoading) { console.log(data); }
  console.log("Home component isd being laoded?");

  return (
    <div>
       <HeroSection onShopNowClick={handleShopNowClick} />
      {!isLoading && !error &&
    <div>
          <div ref={latestRef}>
            <LatestCollection
              data={data["latest_products"]}
              heading={"LATEST COLLECTIONS"}
              title={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            />
          </div>
          <LatestCollection
            data={data["best_sellers"]}
            heading={"BEST SELLERS"}
            title={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          />
        </div>
     
      }
   
    </div>
  )
}

export default Home