import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProductCard1.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
const Card1 = () => {
  return (
    <div className='naane'>
    <Card className="custom-card">
      <Card.Img variant="top" src="./pro1.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      
        <Card.Title className="custom-card-title"> Quartz Women Watch - UWUCL0502</Card.Title>
        
        <Card.Text className="custom-card-text">
         <del>₹7,089.00 </del><b>₹3,037.00</b><br></br>
        Available
        </Card.Text>
        <Link to="/viewp1">
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} >
        <PreviewIcon/> View</button>
        </Link>
       
       
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
       
      </Card.Body>
    </Card>


    <Card className="custom-card">
      <Card.Img variant="top" src="./pro2.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      
        <Card.Title className="custom-card-title"> Quartz Unisex Watch - PSDBA0623</Card.Title>
     
        <Card.Text className="custom-card-text">
        <del>₹24,995.00 </del><b>₹22,425.00</b><br></br>
        Available
        </Card.Text>
        <Link to="/viewp2">
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/> View</button></Link>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>



    <Card className="custom-card">
      <Card.Img variant="top" src="./pro3.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
    
        <Card.Title className="custom-card-title">Quartz Men Watch - UWUCG0305</Card.Title>
        
        <Card.Text className="custom-card-text">
        <del>₹1,995.00 </del><b>1,596.00</b><br></br>
        Available
        </Card.Text>
        <button   className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><PreviewIcon/>View</button>
        <button  className="btn custom-btn" style={{ marginTop: 2,marginRight: 4,backgroundColor: 'orange' }} ><ShoppingCartIcon/>Cart</button>
      </Card.Body>
    </Card>


    <Card className="custom-card">
      <Card.Img variant="top" src="./pro4.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
     
        <Card.Title className="custom-card-title"> Quartz Men Watch - UWUCG0000</Card.Title>
      
        <Card.Text className="custom-card-text">
        <del>₹5,995.00 </del><b>₹3,597.00</b><br></br>
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


export default Card1;