import { Outlet } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import  {ToastContainer} from "react-toastify";
function App() {
 

  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
