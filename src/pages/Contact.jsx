import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
}

export const Contact = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = () => {
    setMessage('Submiting');
  }

  setTimeout(() => {
    setMessage(null);
  }, 2000);


  return (
    <section>
      <div className='container'>
        <h2>Contact Page</h2>

        <div className="contact-form">
          <Form method='POST' action='/contact' className='flex-form'>
            <div className='box'>
              <label htmlFor="username">Name</label>
              <input type="text" name="username" id="name" placeholder='UserName' required />
            </div>
            <div className='box'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Email' required />
            </div>

            <div className='box'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder='Message' required></textarea>
            </div>
            <div><button type='submit' className='submit-btn' onClick={handleSubmit}>Submit</button></div>
            <p>{message}</p>
          </Form>
        </div>
      </div>
    </section>

  )
}

