import {
  AppBar,
  Backdrop,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "end",
  },
});
export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
        top: "30px",
        boxShadow: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Light blue with 50% opacity
        backdropFilter: "blur(10px)", // Apply blur effect
        borderRadius: "20px",
        border: "0.5px solid #B0C4DE", // Light blue narrow border
        boxShadow: "0px 2px 5px rgba(173, 216, 230, 0.6)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton>
          <AcUnitIcon sx={{ backgroundColor: "white" }} />
        </IconButton>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
          Sitemark
        </Typography>

        <IconButton sx={{ backgroundColor: "white", cursor: "pointer" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
