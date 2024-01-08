import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './HomeCorosal.css';
const data = [
  {
   image: require('./cr1.jpg'), 
  },
  {
    image:require('./cr2.jpg'),
   },
   {
    image:require('./cr3.jpg'), 
   }, 
   {
    image:require('./cr4.jpg'), 
   }, 
   {
    image:require('./cr5.jpg'), 
   }, 
   {
    image:require('./cr6.jpg'), 
   }, 
   {
    image:require('./cr7.jpg'), 
   }, 
   {
    image:require('./cr8.jpg'), 
   }, 
   {
    image:require('./cr9.jpg'), 
   }, 
];

function Homee() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
   <div>
    
    <div className="blur">
    
    <div className="hp">
    <Carousel activeIndex={index} interval={2000} onSelect={handleSelect}> 
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          
          className="d-block-w-100"  
          src={slide.image}
          alt="slider image"
          style={{ width: '500px', height: '400px'  }}
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </div>
    </div>
   </div>
  );
}
export default Homee;







