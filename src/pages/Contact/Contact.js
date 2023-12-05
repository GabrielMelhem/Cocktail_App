import React from "react";
import {ContactSection, ContactTitle, Span, Form, FormInput,InputText,InputEmail,InputExp,TextArea,InputSubmit} from './style.js'
import Footer from "../../components/Footer/Footer";


function Contact() {
  return (
    <>
      <ContactSection>
        <div class="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Name" />
              <InputEmail type="email" placeholder="Email" />
            </FormInput>
            <InputExp type="text" placeholder="Subject" />
            <TextArea cols="30" rows="10" placeholder="Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </>
  );
}

export default Contact;
