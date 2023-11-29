import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useDarkMode } from '../Components/DarkModeContext';
import { Button, Grid, Card, CardMedia, CardContent, Typography, TextField } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ScrollControlButtons from '../Components/ScrollControlButtons';  // Import the ScrollControlButtons component
import img1 from '../imgs/brakes.jpg';
import img2 from '../imgs/gearbox.jpg';
import img3 from '../imgs/intake.jpg';
import img4 from '../imgs/letters.jpeg';
import img5 from '../imgs/piston.jpg';
import img6 from '../imgs/rotor.jpg';
import img7 from '../imgs/suspension.jpg';
import img8 from '../imgs/turbo.jpg';
import img9 from '../imgs/wheels.jpg';
import img10 from '../imgs/TrafficLight.jpg';
import img11 from '../imgs/vinyl.jpg';

const productsData = [
  { id: 1, name: 'Brakes', imageUrl: img1 },
  { id: 2, name: 'Gearbox', imageUrl: img2 },
  { id: 3, name: 'Intake', imageUrl: img3 },
  { id: 4, name: 'Letters', imageUrl: img4 },
  { id: 5, name: 'Piston', imageUrl: img5 },
  { id: 6, name: 'Rotor', imageUrl: img6 },
  { id: 7, name: 'Suspension', imageUrl: img7 },
  { id: 8, name: 'Turbo', imageUrl: img8 },
  { id: 9, name: 'Wheels', imageUrl: img9 },
  { id: 10, name: 'Traffic Light', imageUrl: img10 },
  { id: 11, name: 'Vinyl', imageUrl: img11 }
];

// ... (previous imports)

function Products() {
  const { darkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar />
      </div>

      <div style={{ backgroundColor: darkMode ? '#333' : '#f5f5f5', padding: '20px', textAlign: 'center' }}>
        <TextField
          label="Search Product"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', marginRight: '10px' }}
        />

        {/* Help button using NavLink */}
        <NavLink to="/qa" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginBottom: '20px' }}
          >
            <HelpOutlineIcon />
          </Button>
        </NavLink>

        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: darkMode ? '#444' : '#fff' }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200"
                  image={product.imageUrl}
                  style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <CardContent style={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{
                      color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)',
                      backgroundColor: darkMode ? '#555' : '#eee',
                      padding: '8px',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                    }}
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
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
        <p style={{ color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)', marginTop: '10px', fontSize: '12px' }}>
          &copy; 2023 CarCharms. All rights reserved.
        </p>
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

    </>
  );
}

export default Products;

