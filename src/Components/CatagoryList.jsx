import React,{useEffect, useState} from 'react'
import { getCatagory, updateCategory } from '../Services/allApis'
import { deleteCategory,getSpecificVideo} from'../Services/allApis'
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';

function CatagoryList(status) {
    const[cat,setCat]=useState([])
    const[deleteStatus,setDeleteStatus]=useState({})
    useEffect(()=>{
        getData()
    },[status,deleteStatus])
    const getData=async()=>{
        const res=await getCatagory()
        console.log(res);
        setCat(res.data)
    }
    const handleDelete=async(id)=>{
      const res=await deleteCategory(id)
      console.log(res);
      if(res.status>=200 && res.status<300){
        toast.success("Category Deleted!!")
        setDeleteStatus(res)
        
      }
      else{
        toast.error("Catagory deletion failed!!")
      }
    }
    const handleDrop=async(e,id)=>{
      console.log("catagory id:",id);
      const vid =e.dataTransfer.getData("videoId")
      console.log("dropped video id:"+vid);
      const catagory=cat.find(item=>item.id==id)
      console.log(catagory);
      const {data}=await getSpecificVideo(vid)
      //console.log(video.data);
catagory.videos.push(data)
console.log(catagory);
const res=await updateCategory(catagory,id)
if(res.status>=200 && res.status<300){
  toast.success(`${data.caption} added to ${catagory.name}`)
  getData()
}
else
{
  toast.error("video Adding to Category Failed ")
}

    }
    const handleDragOver=(e)=>{
      e.preventDefault()
    }
  return (
    <>
    <div className='mt-3 border shadow  p-2'>
      {
        cat?
        cat.map(item=>(
            <div className='bg-primary rounded shadow my-3 p-4 ' onDrop={(e)=>{handleDrop(e,item.id)}} onDragOver={(e)=>{handleDragOver(e)}}>
            <div>
            
              <span>{item.name}</span>
              <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:"#000000"}} ></i>
               </div> 
            <div className='mt-3'>
{
  item?.videos.map(v=>(
    <VideoCard video={v} cat={true}/>
  ))
}
            </div>
            </div>
        ))
        :
        <h1>No Catagories</h1>
      }
    </div>
    </>
  )
}

export default CatagoryList