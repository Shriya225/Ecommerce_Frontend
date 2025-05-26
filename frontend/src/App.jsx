// import { Outlet, useNavigation } from 'react-router-dom';

// function App() {
//  const navigation = useNavigation();
//   const isLoading = navigation.state === 'loading';
//   return (
//     <div>
//       {isLoading && <Loader />}
//       <NavBar/>
//       <Outlet/>
//       <Footer/>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   )
// }

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Loader from './components/Loader';
import  {ToastContainer} from "react-toastify";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
const App = () => {
  const location = useLocation();
  // useEffect(() => {
  //   setLoading(true);
  //   const timeout = setTimeout(() => setLoading(false), 300); // adjust as needed
  //   return () => clearTimeout(timeout);
  // }, [location]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <NavBar />
      <Outlet />
       <Footer/>
<ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
export default App