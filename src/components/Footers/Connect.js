import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from './Footer'
import ConnectForm from "./ConnectForm";

const FormSocialContainer = styled.div`
  margin: auto;
  max-width: 50rem;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
`;

const initialValues = {
  subject: "",
  message: "",
};


export default function Connect() {
  let [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    switch (true) {
      case e.target.placeholder === "Email": {
        setValues({ ...values, emailAddress: e.target.value });
        break;
      }
      case e.target.placeholder === "Subject": {
        setValues({ ...values, subject: e.target.value });
        break;
      }
      case e.target.placeholder === "Message": {
        setValues({ ...values, message: e.target.value });
        break;
      }
      default: {
        setValues({ ...values });
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mailtolink = `mailto:calebsevan@gmail.com?subject=${values.subject}&body=${values.message}`;
    window.open(mailtolink, 'emailWindow');
  };

  // Watcher
  useEffect(() => {
    // console.log(values)
  }, [values]);

  return (
    <div id="connect">
      <h3>Questions? Or looking to collaborate?</h3>
      <h4>Connect with me here!</h4>
      <FormSocialContainer>
        <ConnectForm changeHandler={changeHandler} submitHandler={submitHandler}></ConnectForm>
      </FormSocialContainer>
      <Footer />
      
    </div>
  );
}
