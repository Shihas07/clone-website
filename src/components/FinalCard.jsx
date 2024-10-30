import {
  Avatar,
  Card,
  Container,
  styled,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

export default function FinalCard() {
  const StyleCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    
    flexDirection: "column",
    backgroundColor: theme.palette.common.black,  
    color: theme.palette.common.white,
    
  }));

  const data = [
    {
      item: 1,
      name: "Engineer",
      Head: "The future of AI in software engineering",
      description:
        "Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software.",
      avatar: "/placeholder1.svg?height=40&width=40",
      date: "July 14, 2021",
      authorName: "Shihas",
    },
    {
      item: 2,
      name: "Designer",
      Head: "Innovative design trends for 2022",
      description:
        "Discover the latest design trends that are shaping the future of digital and print design in 2022.",
      avatar: "/placeholder2.svg?height=40&width=40",
      date: "August 10, 2021",
      authorName: "Alex",
    },
    {
      item: 3,
      name: "Product Manager",
      Head: "The role of product management in startups",
      description:
        "Learn how effective product management can make or break a startup's success in today's competitive market.",
      avatar: "/placeholder3.svg?height=40&width=40",
      date: "September 5, 2021",
      authorName: "Maria",
    },
    {
      item: 4,
      name: "Data Scientist",
      Head: "Leveraging data for better decision making",
      description:
        "Explore how data science is transforming industries and enabling data-driven decisions across organizations.",
      avatar: "/placeholder4.svg?height=40&width=40",
      date: "October 1, 2021",
      authorName: "James",
    },
    {
      item: 5,
      name: "DevOps Engineer",
      Head: "Streamlining development and operations",
      description:
        "Understand the principles of DevOps and how they lead to faster development cycles and better collaboration.",
      avatar: "/placeholder5.svg?height=40&width=40",
      date: "November 12, 2021",
      authorName: "Sarah",
    },
    {
      item: 6,
      name: "Cybersecurity Analyst",
      Head: "Staying ahead of cyber threats",
      description:
        "Discover strategies and tools to protect your organization from evolving cybersecurity threats.",
      avatar: "/placeholder6.svg?height=40&width=40",
      date: "December 20, 2021",
      authorName: "Michael",
    },
  ];
  

  return (
    <Container>
      <Typography variant="h5">Latest</Typography>

      <Toolbar>
  <Grid container spacing={2}>
    {data.map((item, ind) => (
      <Grid item xs={12} lg={6} key={ind}>
        <StyleCard>
          <Toolbar>
            <Typography variant="h7">{item.name}</Typography>
          </Toolbar>

          <Typography variant="h7" gutterBottom>
            {item.Head}
          </Typography>
          <Typography variant="h7" gutterBottom>
            {item.description}
          </Typography>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={item.avatar} alt={item.authorName} />
              <Typography gutterBottom sx={{ marginLeft: 1 }}>
                {item.authorName}
              </Typography>
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {item.date}
            </Typography>
          </Grid>
        </StyleCard>
      </Grid>
    ))}
  </Grid>
</Toolbar>

    </Container>
  );
}
