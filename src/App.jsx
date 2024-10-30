import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container,Grid, Toolbar} from '@mui/material'
import Nav from './components/nav'
import SeCondCard from './components/seCondCard'
import ImageCard from './components/imageCard'
import downloadImage from './assets/download.jpeg';
import downloadImage2 from './assets/images.jpeg';
import GridCards from '../Grid'
import FinalCard from './components/FinalCard'
import FooterComponents from './footerComponents'





function App() {
  const details=[

    {
     image:downloadImage,
     firstHead:"engineer",
     secondHead:"Revolutionizing software development with cutting-edge tools",
     para:"Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software"
      

    },
    {
     image:downloadImage2,
     firstHead:"softwire",
     secondHead:"Innovative product features that drive success",
     para:"Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn"
      

    },

]

  return (
    <>
     
       
       <Container sx={{marginTop:"30px"}}>
     
         <Nav/>
         <Box sx={{marginTop:"30px"}}> 
         <SeCondCard/>
         </Box>
        
         <Box sx={{ marginTop: "50px" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        {details.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} lg={6} key={index}>
            <ImageCard data={item} />
          </Grid>
        ))}
      </Grid>
          

           <Box sx={{marginTop:"30px"}}>
           <GridCards data={details}/>
           </Box>

          
          <Box sx={{marginTop:"30px", borderBottom: "1px solid gray",}}>
          <Toolbar>
            <FinalCard/>
            </Toolbar>
          </Box>

          <Box sx={{marginLeft:"50p"}}>
             <FooterComponents/>
          </Box>
        
        
        
    </Box>
         


          
          
         
       </Container>
         
       
    </>
  )
}

export default App
