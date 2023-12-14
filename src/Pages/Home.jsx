import React from 'react';
import Navbar from '../Components/Navbar';
import { useDarkMode } from '../Components/DarkModeContext';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ScrollControlButtons from '../Components/ScrollControlButtons';
import videoclip from '../imgs/video.mp4';
import background from '../imgs/poza.jpg';

function Home() {
  const { darkMode } = useDarkMode();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '4rem',
    backgroundColor: darkMode ? '#333' : '#f5f5f5',
    color: darkMode ? '#fff' : '#000',
  };

  return (
    <>
      <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar />
      </div>

      <div style={containerStyle}>
        <div style={{ flex: '1', maxWidth: '50%' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
            Welcome to CarCharms - Your Source for Stylish Keychain Accessories!
          </h1>
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            At CarCharms, we believe that even the smallest details can make a big difference. Elevate your driving experience
            with our premium collection of car keychain accessories designed to add style and personality to your keys.
          </p>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
            What We Offer:
          </h2>
          <p style={{ fontSize: '14px', marginBottom: '20px' }}>
            Explore our diverse range of keychain accessories, crafted with precision and passion. Whether you're a car enthusiast
            or looking for a thoughtful gift, our collection has something for everyone. From sleek and modern designs to
            vintage-inspired charms, we have the perfect accessory to match your style.
          </p>
        </div>
        <div style={{ flex: '1', maxWidth: '50%', marginLeft: '20px' }}>
          <img src={background} alt="CarCharms" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', margin: '20px auto', maxWidth: '70%', backgroundColor: darkMode ? '#333' : '#f5f5f5' }}>
        <video
          autoPlay
          loop
          muted
          controls
          style={{
            width: '100%',
            height: '50%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        >
          <source src={videoclip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

      <div style={{ backgroundColor: darkMode ? '#2c2c2c' : '#f5f5f5', padding: '10px', textAlign: 'center' }}>
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

export default Home;
