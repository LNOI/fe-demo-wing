import React, { useState } from 'react'
import axios from 'axios';
import './style.css'
function StableDiffusion({setPage}) {
    const [onDisableSubmit,setDisableSubmit] = useState(false)
    const [prompt,setPrompt] = useState("")
    const [listImage,setListImage] = useState([])
    const [onViewSubmit,setOnViewSubmit] = useState(false)
    const postData = async () => {
        try {
            setDisableSubmit(true)
            setOnViewSubmit(false)
            const data = {
            prompt: prompt,
            };
            const response = await axios.post('http://localhost:8000/api/v1/stable_diffustion', data);
            setListImage(response.data.data)
            setDisableSubmit(false)
            setOnViewSubmit(true)
        } catch (error) {
            
            console.error('Error:', error.message);
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Data:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            console.error('Request:', error.request);
            }
        }
        };
  return (
    <>
        <h5>Write 5 words related to the above topic to create pictures</h5>
        <br></br>
        <input value={prompt} onChange={(e)=>{setPrompt(e.target.value)}}></input>
        {
            onDisableSubmit ? null : <button onClick={postData}>generate image</button>
        }
        <br></br>
        <div className='images_diff' >
        {
            listImage?.map((item)=>
                <div>
                <img width={"100px"} height={"100px"} className='images_src' src={item} alt="" srcset="" />
                <input type="checkbox"/>
                </div>
            )
        }
        </div>

        {onViewSubmit?<button onClick={()=>{setPage(0)}}>Submit</button>:null}
        
    </>
  )
}

export default StableDiffusion