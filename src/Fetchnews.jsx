import React, { useState } from 'react'
import axios from "axios";
import "./fetch.css"




const Fetchnews = () => {
    const[news,setnews]=useState([])


    const fetchNews=()=>{

axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=75ffaabf63a24b38bf39cf6f8f27614b")
.then((response)=>{
    console.log(response);

    setnews(response.data.articles)

})
    }
  return (
    <>
      <div className='container'>
        <div className='row'>
           <div className='col-4'>
           <button className="btn btn-primary" onClick={fetchNews}>Fetch news</button>
           </div>
        </div>
      </div>
 


 <div className='container 1'>
<div className='row'>
    {
        news.map((value)=>{
         return (<div className='col-4'>
    <div className="card" style={{width: "18rem"}}>
  <img src={value.urlToImage}class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <a href="#" className="btn btn-primary">Main</a>
  </div>
</div>
    </div>)
        })
    }
</div>
 </div>


    
    </>
    
  )
}

export default Fetchnews