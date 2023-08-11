import * as React from "react";
import { useState } from "react";
import Typist from 'react-typist'
import '@fontsource/inter';
import Layout from "../components/Layout/index.js";
import headshot from "../images/headshot.jpg"
import {Button} from '@mui/joy'
import { Link } from "gatsby";


const IndexPage = () => {

  const [variant, setVariant] = useState('solid');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    // background: 'linear-gradient(45deg, #FCE38A, #F38181)' // Background gradient
  };

  const imageStyle = {
    borderRadius: '5%',
    marginBottom: '20px',
    width: '300px',
    transition: 'transform 0.3s', // Hover effect
    ':hover': {
      transform: 'scale(1.1)'
    }
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#cad2c5',
  };

  const subTextStyle = {
    color: '#cad2c5', 
    fontSize: '1.2em'
  };

  return (
    <Layout pageTitle="">
      <hr></hr>
      <div style={containerStyle}>
        <div>
          
          <br></br>
          <img src={headshot} alt="Caroline smiling" style={imageStyle} />
        </div>
        <Typist cursor={{show: false}}>
          <h1 style={headingStyle}>Hi! My name is Caroline.</h1>
        </Typist>
        <p style={subTextStyle}>Dietitian turned Software Engineer</p>
        <br></br>
       <Link to="/projects" style={{textDecoration: 'none'}}> 
       <Button size="md" variant={variant} color="neutral" aria-label="Go to projects page">
          View Projects
        </Button>
        </Link>


      </div>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage
