import React from 'react';
import './WatchPage1.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
const WatchPage1 = () => {
  // Sample data for the watch
  const watchData = {
    name: 'Plein Sport Hurricane Unisex Brown Round Analogue Quartz - PSDBA0623',
    price: '₹22,425.00',
    brand: 'Luxury Watches Co.',
    description: 'Inclusive of all taxes',
    imageUrl:'./pro2.jpg', 
  };

  return (
    <div className="watch-container">
      <img src={watchData.imageUrl} alt={watchData.name} className="watch-image" />
      <div className="watch-details">
            <h1 className="watch-name">{watchData.name}</h1>
        <p className="watch-price">{watchData.price}</p>
        <p className="watch-brand">{watchData.brand}</p>
        <p className="watch-description">{watchData.description}</p>
        <div id='aaa'>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Product Features:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
             
            <li><b>Gender :</b> Unisex</li>
             <li><b>Movement :</b> Quartz</li>
             <li><b>Dial Type : </b>Analog</li>
             <li><b>Dial Shape :</b> Round</li>
             <li><b>Dial Size : </b>44</li>
             <li><b>Dial Colour :</b> Brown</li>
             <li><b>Case Material :</b> Steel Ion Plating 4N</li>
             <li><b>Case Size : </b>44</li>
             <li><b>Case Shape :</b> Round</li>
             <li><b>Water Resistance : </b>50</li>
             <li><b>Band Type :</b> Tongue</li>
             <li><b>Band Material :</b> SILICONE + SS</li>
             <li><b>Band Colour :</b>  Brown & Rose Gold</li>
             <li><b>Glass Type :</b> Mineral</li>
             <li><b>Warranty : </b>1 Year manufacturer warranty</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography>Manufacturer & Importer:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
         <li><b> Country of origin :</b> China</li>
         <li><b>Manufacturer Details :</b> TIMEX GROUP INDIA LIMITED - Plot No 10, Industrial Area,Katha, Bhatoli Kalan,-Baddi-173205, H.P, India</li>
         <li><b>Importer Details :</b> TIMEX GROUP INDIA LIMITED - Plot No 10, Industrial Area,Katha, Bhatoli Kalan,-Baddi-173205, H.P, India</li>
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Shipping & Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <h6>Shipping Policy:</h6>
           <p><b>Shipping will be processed within 24 working hours </b>after receiving the order, 
           subject to stock availability. If a product is not available in stock, our customer
            support team will inform you within 48 working hours.<br></br><br></br>
           </p>
           <h6>Return and Exchange Policies:</h6>
           <p><b>No return or exchange is allowed for products with a value above 25,000.</b> 
           For products below 25,000 in value, we offer a hassle free 7-day return and exchange policy.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <Button id='z1' variant="contained" color="primary" sx={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }}>
          <ShoppingCartIcon/>
          Cart
        </Button>
        <Button id='z2' variant="contained" color="primary" sx={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }}>
          <ShopOutlinedIcon/>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default WatchPage1;