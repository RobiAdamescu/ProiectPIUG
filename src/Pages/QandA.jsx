import React from 'react';
import Navbar from '../Components/Navbar';
import { useDarkMode } from '../Components/DarkModeContext';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ScrollControlButtons from '../Components/ScrollControlButtons';

function QandA() {
  const { darkMode } = useDarkMode();

 
  const faqs = [
    { question: '1. What types of car keychain accessories do you offer?', answer: 'We offer a diverse range of car keychain accessories, including sleek and modern designs, vintage-inspired charms, and more. Explore our collection to find the perfect accessory that matches your style.' },
    { question: '2. Are the keychain accessories durable?', answer: 'Yes, our keychain accessories are crafted with durability in mind. We use high-quality materials to ensure that our products are long-lasting and can withstand daily use.' },
    { question: '3. How do I place an order?', answer: `To place an order, simply browse our product catalog, select the items you want, and proceed to the checkout. Follow the easy steps to provide your shipping information and payment details. Once your order is confirmed, we'll take care of the rest.` },
    { question: '4. Can I customize my keychain accessory?', answer: 'At the moment, we do not offer customization services. However, we are always expanding our product offerings, so stay tuned for any updates or new releases that may include customization options.' },
    { question: '5. What payment methods do you accept?', answer: 'We accept a variety of payment methods, including credit cards, debit cards, and secure online payment gateways. You can choose the payment option that suits you best during the checkout process.' },
    { question: '6. How can I track my order?', answer: 'Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package as it makes its way to you.' },
    { question: '7. What is your return policy?', answer: 'We have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving your order. Please refer to our "Returns and Exchanges" page for more details on the return process.' },
    // Add more questions and answers as needed
  ];
  

  return (
    <>
      <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar />
        <Container style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)' }}>
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
              FREQUENTLY ASKED QUESTIONS
            </h1>
            {/* FAQ section */}
            <Grid container spacing={2} justifyContent="center">
              {faqs.map((faq, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Accordion style={{ backgroundColor: darkMode ? '#2c2c2c' : '#f5f5f5' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)' }} />}
                      aria-controls={`panel${index + 1}a-content`}
                      id={`panel${index + 1}a-header`}
                    >
                      <Typography variant="h6" color={darkMode ? '#fff' : '#000'}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ color: darkMode ? '#ccc' : 'rgba(0, 0, 0, 0.6)' }}>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </div>
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
    </>
  );
}

export default QandA;