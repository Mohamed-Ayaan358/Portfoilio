import React from 'react';
import {Form, Button,Container,Row,Col} from 'react-bootstrap';

const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });


export const Contact = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleClick1 = (e) => {
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";

    }

    const handleClick2 = (e) => {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
 
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_lydc5pp';
        const serviceID = "service_1";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email })

        console.log(formData);
      };

    return (
        <div style={{backgroundColor:"black"}}>
        <div style={{padding:"10vh",paddingBottom:"5vh"}}>
        <Button  className="mb-3" style={{border:"1px #2DD4BF solid ",color:"#2DD4BF"}} onClick={handleClick1} variant="outline-dark">Contact</Button><Button style={{border:"1px #2DD4BF solid ",color:"#2DD4BF"}}  className="mb-3" onClick={handleClick2} variant="outline-dark">Comission</Button>
        <Form id="form1">
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{color:"#2DD4BF"}} >Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{color:"#2DD4BF"}} >Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label style={{color:"#2DD4BF"}} >Mobile no.*</Form.Label>
                <Form.Control onChange= {handleChange} name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label style={{color:"#2DD4BF"}} >Query*</Form.Label>
                <Form.Control onChange= {handleChange} name="query" as="textarea" rows={3} />
            </Form.Group>

            <Button onClick={handleSubmit} style={{border:"1px #2DD4BF solid ",color:"#2DD4BF",backgroundColor:"black"}}  type="submit">
                Submit
                </Button>
        </Form >

        <Form style={{display: "none"}} id="form2">
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{color:"#2DD4BF"}} >Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{color:"#2DD4BF"}} >Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label style={{color:"#2DD4BF"}} >Details* [Include any details pertaining to the project and the budget]</Form.Label>
                <Form.Control onChange= {handleChange} name="query" as="textarea" rows={3} />
            </Form.Group>
        
            <Button onClick={handleSubmit} style={{border:"1px #2DD4BF solid ",color:"#2DD4BF",backgroundColor:"black"}} type="submit">
                Submit
                </Button>
        </Form >
        </div>
        </div>

    )
}
