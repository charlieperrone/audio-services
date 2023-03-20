import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from 'app/vars';

const StyledForm = styled.form`
  color: white;
  width: 16em;
  display: grid;
  margin: auto;

  input,
  textarea {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0.5em;
    background-color: white;
    color: black;
  }

  input:not(:last-child),
  textarea:not(:last-child) {
    margin-bottom: 1em;
  }

  input:last-child {
    background-color: ${props => props.theme.mainRed};
  }
`;

export const ContactUs = () => {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(document.createElement('form'));

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      result => {
        console.log(result.text);
        console.log('message sent');
        setSent(true);
      },
      error => {
        console.log(error.text);
      },
    );
  };

  if (sent) {
    return <div>Thanks for contacting me! I'll be in touch shortly.</div>;
  }

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <h2>Contact Me</h2>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </StyledForm>
  );
};
