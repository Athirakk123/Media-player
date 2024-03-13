
import React,{useEffect,useState} from 'react'
import Videocard from './VideoCard'
import { getVideo } from '../Services/allApis'


function Video({res}) {
  const [videoList,setVideoList]= useState([])
  const [delStatus,SetdelStatus]=useState("")
  useEffect(()=>{
    getData()
  },[res,delStatus])
  const getData=async()=>{
    const res = await getVideo()
    setVideoList(res.data)
    console.log(res);
  }
  return (
    <>
    <div className='w-100 row'>
      {
        videoList.length>0? 
        videoList.map((item)=>(
          <Videocard video={item} del={SetdelStatus} key={item.id}/>
        )):
        <h3>No video Available</h3>
      }
    </div>
    </>
  )
}

export default Video