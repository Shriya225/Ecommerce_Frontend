import React from 'react'
import { Toast ,ToastContainer} from 'react-bootstrap';
import { useState } from 'react';
const Home = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className='bg-success'>Home


<ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">App Message</strong>
          </Toast.Header>
          <Toast.Body>Woohoo! This is a top-right toast! 🎉</Toast.Body>
        </Toast>
      </ToastContainer>
<button onClick={()=>{setShowToast(true)}}>hh</button>
</div>
  )
}

export default Home