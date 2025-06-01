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


  return (
    <div>
       <HeroSection onShopNowClick={handleShopNowClick} />
      {!isLoading && !error &&
    <div>
          <div ref={latestRef}>
            <LatestCollection
              data={data["latest_products"]}
              heading={"LATEST COLLECTIONS"}
              title={"Discover our handpicked selection of the latest fashion trends, crafted for comfort and style."}
            />
          </div>
          <LatestCollection
            data={data["best_sellers"]}
            heading={"BEST SELLERS"}
            title={"Explore our best-selling collections — a perfect blend of comfort and style"}
          />
        </div>
     
      }
   
    </div>
  )
}

export default Home