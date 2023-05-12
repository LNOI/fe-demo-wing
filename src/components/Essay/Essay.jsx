import React, { useState } from 'react'
import EmptyTextarea from './EmptyTextarea'
import Button, { buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import './style.css'
function Essay({setPage}) {
    const [onDisableSubmit,setDisableSubmit] = useState(false)
    const [essayContent,setEssayContent] = useState("")
    const [suggestion,setSuggestion] = useState("")
    const [checkPla,setcheckPla] = useState(false)
    const postData = async () => {
    try {
        setDisableSubmit(true)
        const data = {
        content: essayContent,
        topic: 'study_abroad_canada_ielts_7.0',
        };
        const response = await axios.post('http://0.0.0.0:8000/api/v1/suggestion', data);
        // console.log('Status Code:', response.status);
        // console.log('Response Data:', response.data);
        if(response.data.data==="Detect plagiarism"){
          alert("Detect plagiarism, Please rewrite")
          setDisableSubmit(false)
          setSuggestion("")
        }else{
          setSuggestion(response.data.data.response)
        }
        
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
    <h5>Write an essay related to the topic: Study in Canada with Level 7.0 (limit 300 words)</h5>
    <EmptyTextarea  setEssayContent={setEssayContent} essayContent={essayContent}></EmptyTextarea>
    <br/>
    {
        onDisableSubmit? null: <CustomButton onClick={postData}>Submit</CustomButton> 
    }
    {
       suggestion?.length <= 0 ?  
       <>
       <h5>Suggestion</h5>
       <textarea name="suggestion" id="suggestion" cols="30" rows="10" value={suggestion}></textarea> 
       </>:null
    }

    {
       suggestion?.length <= 0 ?  
       <>
       <div>
       <h5>Rewrite the essay with suggestion</h5>
       <textarea  name="suggestion" id="suggestion" cols="30" rows="10" ></textarea>
       <br />
       {/* <button onClick={()=>{setPage(1)}}>Submit</button> */}
       <CustomButton  onClick={()=>{setPage(1)}}>Submit</CustomButton> 
       </div>
       </> :null
    }
   
    </>
  )
}

export default Essay

const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const CustomButton = styled(Button)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
   
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;