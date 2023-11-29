import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          margin: '10px',
          backgroundColor: darkMode ? '#2c2c2c' : '#f5f5f5', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant='outlined'
            InputLabelProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' } }} // White text for dark mode, default color for light mode
            InputProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' } }} // White text for dark mode, default color for light mode
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant='outlined'
            InputLabelProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' } }}
            InputProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' } }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            variant='outlined'
            InputLabelProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' } }}
            InputProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' } }}
          />
          <TextField
            label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            fullWidth
            variant='outlined'
            InputLabelProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' } }}
            InputProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' } }}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            variant='outlined'
            InputLabelProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' } }}
            InputProps={{ style: { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' } }}
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
