import React from 'react';
import Navbar from '../Components/Navbar';
import { useDarkMode } from '../Components/DarkModeContext';
import ContactForm from '../Components/ContactForm';
import { Button, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ScrollControlButtons from '../Components/ScrollControlButtons';

function Contact() {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar />
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' }}>
          <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
            CONTACT US
          </h1>
          <p style={{ marginBottom: '20px', textAlign: 'center', fontSize: '18px' }}>
            Have a question or need assistance? Feel free to reach out by sending us a ticket. We're here to help!
          </p>
          <ContactForm darkMode={darkMode} />
        </Container>
      </div>
      <ScrollControlButtons
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: '1000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
        onScrollUp={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollDown={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          })
        }
      />
      <div style={{ backgroundColor: darkMode ? '#2c2c2c' : '#f5f5f5', padding: '20px', textAlign: 'center', }}>
        <Button component="a" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" color="primary" variant="text" style={{ margin: '0 10px' }}>
          <InstagramIcon />
        </Button>
        <Button component="a" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" color="primary" variant="text" style={{ margin: '0 10px' }}>
          <FacebookIcon />
        </Button>
        <Button component="a" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" color="primary" variant="text" style={{ margin: '0 10px' }}>
          <TwitterIcon />
        </Button>
        <p style={{ color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)', marginTop: '10px', fontSize: '14px' }}>
          &copy; 2023 CarCharms. All rights reserved.
        </p>
      </div>
      
    </>
  );
}

export default Contact;
