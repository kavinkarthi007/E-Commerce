import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProductCard3.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
const Card3 = () => {
  return (
    <div className='naane'>
    <Card className="custom-card">
      <Card.Img variant="top" src="./cr1.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      
        <Card.Title className="custom-card-title">Product1</Card.Title>
        
        <Card.Text className="custom-card-text">
        ₹3037.00<br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="./cr2.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      
        <Card.Title className="custom-card-title">Product2</Card.Title>
     
        <Card.Text className="custom-card-text">
        ₹3037.00<br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="./cr3.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
    
        <Card.Title className="custom-card-title">Product3</Card.Title>
        
        <Card.Text className="custom-card-text">
        ₹3037.00<br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="./cr4.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
     
        <Card.Title className="custom-card-title">Product4</Card.Title>
      
        <Card.Text className="custom-card-text">
        ₹3037.00<br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="./cr5.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
     
        <Card.Title className="custom-card-title">Product5</Card.Title>
      
        <Card.Text className="custom-card-text">
        ₹3037.00<br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>
    </div>
  );
};


export default Card3;