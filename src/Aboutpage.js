import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 ><b>About Us</b></h2>
          <p>
         Welcome to JustWatch, your ultimate online shopping destination 
          designed to redefine your digital shopping experience. At JustWatch,
           we're not just an e-commerce platform; we're your virtual marketplace,
            offering a seamless and enjoyable way to discover, explore, and shop for
            a wide array of products.
          </p>
          <h2><b>Our Vision</b></h2>
          <p>
         JustWatch was founded with a vision to create a one-stop-shop that caters to
           the diverse needs and preferences of online shoppers. We understand the dynamic
            nature of the digital marketplace, and our goal is to provide you with a platform
             that simplifies and enhances your online shopping journey.
          </p>
          <h3>A World of Choices</h3>
          <p>
        Explore a world of choices at JustWatch.
             Our extensive catalog spans across categories, offering everything from fashion
              and electronics to home essentials and beyond. Whether you're looking for the
               latest trends or timeless classics, we've got you covered.
          </p>
         <h3>Why Choose JustWatch?</h3>

         <p>
         <i> User-Friendly Interface:</i> Our website and mobile app are
             designed with you in mind. Enjoy a user-friendly interface
              that makes navigation a breeze, ensuring a hassle-free shopping
               experience from the comfort of your home.<br></br>

               <i>Curated Collections:</i> Our team of experts curates collections that
              align with the latest trends, ensuring that you have access to the
                 most stylish and sought-after products in the market.<br></br>

                 <i> Secure and Convenient Transactions:</i> Shop with confidence
                 knowing that your transactions are secure. JustWatch prioritizes 
                 the safety of your personal information and provides multiple payment
                  options for your convenience.
          </p>
          <h3>Customer Satisfaction Guaranteed</h3>
          <p>
          At JustWatch, customer satisfaction is our top priority. Our dedicated 
          customer support team is here to assist you with any inquiries or concerns.
           We value your feedback and are committed to continuously improving our services
            based on your needs.
          </p>
          <h3>Stay Connected</h3>
          <p>
          Join the JustWatch community by following us on social media. Stay updated 
          on the latest arrivals, promotions, and trends. We love engaging with our
           customers and building a vibrant community of online shoppers.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;