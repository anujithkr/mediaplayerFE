import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';  
import { deleteWatchHistory, getHistory } from '../services/allApi';
import { toast } from 'react-toastify';

function WatchHistory() {
  const[allHistory,setAllHistory]=useState([])
  const getAllHistory=async ()=>{
    const resp=await getHistory()
    console.log("history");
    console.log(resp)
    const {data}=resp;
    setAllHistory(data)
  }
  useEffect(()=>{
    getAllHistory()
  },[])
  const deleteHistory=async(id)=>{
    await deleteWatchHistory(id)
    getAllHistory()
  
  }
  return (
    <>
       <div className='container mt-5 d-flex justify-content-between'> 
          <h3 className='textStyle'> WATCH HISTORY</h3>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >
          <i class="fa-solid fa-arrow-left me-3"></i> BACK TO HOME
          </Link>
       </div>
       <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length>0?
            allHistory.map((item)=>(
              <tr>
              <td>{item.id}</td>
              <td>{item.caption}</td>
              <td>{item.embededLink}</td>
              <td>{item.timeValue}</td>
              <td><Button onClick={()=>deleteHistory(item.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
            </tr>
            )):
            <p className='m-5 text-danger'>NO HISTORY FOUND</p>
          }
          
        </tbody>
       </table>
    </>
  )
}

export default WatchHistory






