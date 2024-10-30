import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import downloadImage from "../assets/download.jpeg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ImageCard({data,maxWidth}) {

  console.log(data)
  return (
    <Card
      sx={{
        maxWidth:maxWidth|| "500px",
        border: "1px solid #536ead",
        borderRadius: "10px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.image}
          alt="green iguana"
        />

        <CardContent
          sx={{ backgroundColor: "black", border: "1px solid #536ead" }}
        >
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h7"
            component="div"
          >
            {data.firstHead}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h6"
            component="div"
          >
           {data.seconHead}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
              {data.para}
          </Typography>

            <Grid container sx={{display:'flexx',justifyContent:"space-between",}}>
                   <Grid item sx={{display:"flex"}} >
                        <IconButton sx={{color:"white"}}>
                             <AccountCircleIcon/> 
                             <AccountCircleIcon/> 
                          </IconButton>  
                          
                           <Typography sx={{color:"white",marginTop:"10px"}}>
                               shihas,ajmal
                           </Typography>
                   </Grid>
                   <Grid item sx={{display:"flex",justifyContent:"end"}}>
                       <Typography color={"primary"}>
                          27/20.2024
                       </Typography>
                   </Grid>
            </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
