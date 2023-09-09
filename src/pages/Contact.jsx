import React from 'react';
import { useState } from "react";
import { MDBInput, MDBBtn, MDBTextArea  } from 'mdb-react-ui-kit';

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

    if( name === '' || message === ''){
        alert('Please make sure all fields are filled out.')
        return
    }    
    //Validating Email Format
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    if (!emailRegex.test(String(email).toLowerCase())) {
        alert(`Please enter a valid email`)
        return 
    }
   
    alert(`I'll be in touch soon ${name}!`);
    setName("");
    setEmail("");
    setMessage("");

  };

  return (
    <>
    <section className='contact-me'>
    <div className="title">
        <h2>CONTACT ME</h2>
      </div>
        <form id='form' onSubmit={handleFormSubmit} className='text-center' style={{ width: '100%', maxWidth: '300px' }}>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' style={{ backgroundColor: 'white' }} value={name} onChange={(e) => setName(e.target.value)} />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' style={{ backgroundColor: 'white' }} value={email} onChange={(e) => setEmail(e.target.value)}/>

      <MDBTextArea wrapperClass='mb-4' label='Message' style={{ backgroundColor: 'white' }} value={message} onChange={(e) => setMessage(e.target.value)}/>

      <MDBBtn style={{ backgroundColor: '#348143' }} block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </section>
    
    </>
    
  );
}