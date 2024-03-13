import React,{useEffect,useState}from 'react'
import { allHistory } from '../Services/allApis'
import { Link } from 'react-router-dom'
import { deleteHistory } from '../Services/allApis'


function History() {
  const [history,setHistory]=useState([])
 // const[deleteStatus,setDeleteStatus]=useState({})
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    const res=await allHistory()
    console.log(res.data);
    setHistory(res.data)
  }
  const handleDelete=async(id)=>{
    const res=await deleteHistory(id)
    if (res.status>=200 && res.status<300) {
        del("success")
       
    } else {
        del('Error while deleting')
        
    }
}
  return (
    <>
  <div className='p-5'>
    <Link to = {'/dash'} className='btn btn-info float-end mb-5'>Dashboard</Link>
    <h4>Watch History</h4>
    <table className='table table-bordered'>
      <tr>
        <th>Caption</th>
        <th>Video Url</th>
        <th>Data and Time</th>
        <th></th>
      </tr>
      {
        history?
        history.map(item=>(
        <tr>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.datetime}</td>
          <td>
          <i className="fa-solid fa-trash text-light" onClick={()=>{handleDelete(item.id)}}></i>
          </td>
        </tr>

        ))
        :
        <p className='text-danger'>No history found!!</p>
      }

    </table>

  </div>


    </>
   
  )
}
export default History