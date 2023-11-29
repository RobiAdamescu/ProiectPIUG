import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button } from '@mui/material';

const ScrollControlButtons = ({ onScrollUp, onScrollDown, style }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Set showButtons based on scroll position
      setShowButtons(scrollTop > 100); // You can adjust the threshold as needed
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div style={{ display: showButtons ? 'flex' : 'none', ...style }}>
      <Button onClick={onScrollUp} color="primary" variant="contained">
        <ArrowUpwardIcon />
      </Button>
      <Button onClick={onScrollDown} color="primary" variant="contained">
        <ArrowDownwardIcon />
      </Button>
    </div>
  );
};

export default ScrollControlButtons;
