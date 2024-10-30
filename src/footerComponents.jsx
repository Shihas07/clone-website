import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Divider,
  IconButton,
  styled,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0A0A0A',
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0, 4),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#6B7280',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const FooterComponent = () => {
  const footerSections = {
    Product: ['Features', 'Testimonials', 'Highlights', 'Pricing', 'FAQs'],
    Company: ['About us', 'Careers', 'Press'],
    Legal: ['Terms', 'Privacy', 'Contact'],
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              🎯 Sitemark
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Email
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <StyledTextField
                  fullWidth
                  placeholder="Your email address"
                  variant="outlined"
                  size="small"
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
          {Object.entries(footerSections).map(([section, items]) => (
            <Grid item xs={12} sm={6} md={2} key={section}>
              <FooterHeading>
                {section}
              </FooterHeading>
              {items.map((item) => (
                <FooterLink
                  href="#"
                  key={item}
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </FooterLink>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FooterLink href="#" sx={{ display: 'inline' }}>
              Privacy Policy
            </FooterLink>
            <Typography sx={{ color: 'grey.500' }}>•</Typography>
            <FooterLink href="#" sx={{ display: 'inline' }}>
              Terms of Service
            </FooterLink>
          </Box>
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            Copyright © Sitemark 2024
          </Typography>
          <Box>
            <IconButton color="inherit" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default FooterComponent;