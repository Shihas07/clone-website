import { Search } from "@mui/icons-material";
import {
  Typography,
  Box,
  Container,
  Button,
  Toolbar,
  Grid,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import React from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function SeCondCard() {
  return (
    <div>
      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h2">Blog</Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            Stay in the loop with the latest about our products
          </Typography>
        </Box>

        <Toolbar>
          <Grid
            container
            alignItems="center"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item sx={{ display: "flex", gap: 2 }}>
              <Button variant="outlined" color="white">
                All categories
              </Button>
              <Button>Company</Button>
              <Button>Produect</Button>
              <Button>Design</Button>
              <Button>Engineering</Button>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Paper
                sx={{
                  backgroundColor: "inherit",
        border: "1px solid #536ead",  
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
                elevation={3}
              >
                <IconButton sx={{ color: "white" }}>
                  <Search />
                </IconButton>
                <InputBase
                  sx={{ color: "info.main" }}
                  placeholder="search..."
                ></InputBase>
                    <IconButton color="secondary">
                   <RssFeedIcon/>
                </IconButton>
              </Paper>

             
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </div>
  );
}
