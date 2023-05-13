import React from 'react'
// import { Typography, Divider } from '@material-ui/core';
import { Typography,Divider } from '@mui/joy'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Content() {
  return (
    <div>
    <Grid container columns={{ xs: 4, md: 12 }}>
    <Grid item xs={10} margin={"auto"} >
    <Typography variant="h5">Human Resource Management Policy</Typography>
    <Divider />
    <br></br>
    <Typography variant="h6">1. Introduction</Typography>
    <Typography>
      At 8xbet, we believe that our employees are our greatest asset. This Human Resource Management Policy outlines our
      commitment to promoting a positive work environment, fostering employee development, and ensuring fair and equitable
      treatment of all employees at 8xbet. This policy applies to all employees, including full-time, part-time, temporary, and
      contract workers.
    </Typography>
    <br></br>
    

    <Typography variant="h6">2. Equal Employment Opportunity</Typography>
    <Typography>
      We are committed to providing equal employment opportunities to all individuals, without regard to race, color, religion, sex,
      national origin, age, disability, genetic information, or any other protected status. 8xbet prohibits discrimination, harassment,
      and retaliation in all aspects of employment, including recruitment, hiring, promotions, compensation, benefits, and termination.
    </Typography>
    <br></br>
    <Typography variant="h6">3. Recruitment and Selection</Typography>
    <Typography>
      We strive to attract and hire the most qualified individuals for all job positions at 8xbet. Our recruitment and selection process is
      based on job-related criteria, including skills, qualifications, experience, and cultural fit. We are committed to promoting diversity
      and inclusion in our workforce and aim to eliminate any biases during the recruitment process.
    </Typography>
    </Grid>
    </Grid>
    
  </div>
    )
}

export default Content