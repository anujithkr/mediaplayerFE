import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, deleteVideoCategory, getAllCategories, getVideoDetailsById, updateCategory } from '../services/allApi';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning("please enter the category name")
    } else {
      const body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body);
      console.log("category response");
      console.log(response);
      if (response.status === 201) {
        toast.success(`${categoryName} successfully saved`)
      }
      handleClose()
    }
  }
  const getCategories = async () => {
    const response = await getAllCategories()
    console.log("Categories")
    console.log(response);
    const { data } = response;
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])
  const deleteCategory = async (id) => {
    await deleteVideoCategory(id);
    getCategories()
  }
  const dragOver=(e)=>{
    e.preventDefault();
    console.log("inside dragOver");
    getCategories()
    
  }
  const videoDropped= async(e,id)=>{
    console.log(`dropped inside category with ID ${id}`);
    const vId=e.dataTransfer.getData('videoId');
    console.log(`video with id ${vId} is dropped in Category with Id ${id}`);
    const result=await getVideoDetailsById(vId)
    console.log(result);
    const {data} =result;
    let selectedCategory = categories?.find((item=>item.id==id));
    console.log("Selected category")
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data);
    console.log("final category");
    console.log(selectedCategory);
    const result_new=await updateCategory(id,selectedCategory)
    
  }
  return (

    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'> <i class="fa-solid fa-list-ul text-warning me-3"></i>ADD CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="CATEGORY NAME" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>
      {
        categories?.map((item) => (
          <div className='border border-secondary rounded p-3 m-5' droppable 
          onDragOver={(e)=>dragOver(e)}
          onDrop={(e)=>videoDropped(e,item.id)}
          >
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger' onClick={(e) => deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
              
            </div>
            {
                item.allVideos.length> 0 ?
                item.allVideos.map(video=>(
                  <img src={video.thumbnailUrl} alt="" height={'200px'} width={'100%'} className='mt-3 p-2' />
                )):
                <p>No item found</p>
              }
          </div>
        ))
      }

    </>
  )
}

export default Category