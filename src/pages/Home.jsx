import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
   <>
    <div className='container d-flex align-items-center mt-5 justify-content-between'>
        <Add setUploadVideoStatus={setUploadVideoStatus}/>
        <Link style={{textDecoration:'none'}} to={'/watch'}>
        <span className='fs-5 fw-bold textStyle'>WATCH HISTORY <i class="fa-solid fa-clock  ms-2"></i></span>
        </Link>
    </div>
    {/* second section */}
    <div className='container-fluid mt-5 w-100'>
        <div className='row'>
            <div className='col-md-9 textStyle'>
              <View uploadVideoStatus={uploadVideoStatus}/>
            </div>
            <div className='col-md-3 textStyle'>
              <Category/>
            </div>
        </div>
    </div>
    <ToastContainer
      position='top-center'
      pauseOnHover
      theme="dark"
      autoClose={2000}
      />
   </>
  )
}

export default Home