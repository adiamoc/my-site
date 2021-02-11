import React from "react"
import Layout from "../components/layout"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import chenma from '../images/chenma.jpg'

export default function Home() {
	
  return (
  	<Layout>
  		<h1 className="nowrap"><span className="emphsis display-1">Hi, </span>my name is Chen Ma.</h1>
    	<Row className="mt-4 introduction">
			  <Col className="font-weight-light">
			  <p>
			  	I just graduated from the University of Washington, majoring in Technology Innovation, a cross-discipline major, with a focus on computer science. And I studied Computer Science and Design as my majors at the University of California, Davis from 2015 to 2019.
			  </p>
			  <p className="mb-0">
			  	I'm experienced in web development, data visualization, and object-oriented programming using languages such as C++, Python, Javascript. 
			  </p>
			  </Col>
			  <Col className="chenmaphoto">
			  	<img src={chenma} className="mb-0"/>
			  </Col>
			</Row>
    </Layout>
  );
}