import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  StyledButton,
  StyledInputField,
} from "../../styles/universalStyles";
import IconButton from "./IconButton";
import * as data from '../../data/site-data';

const SubjectField = styled(StyledInputField)`
  min-height: 1.25rem;
  min-width: 15rem;
  max-width: 1rem;
  max-height: 1rem;
  margin-bottom: 0.5rem;
`;

const MessageField = styled(StyledInputField)`
  min-height: 5rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
  /* max-width: 1rem; */
  /* max-height: 1rem; */
`;

const SubmitButton = styled(StyledButton)`
  min-height: 2rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
`;

const FormSocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  max-width: 50rem;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

const initialValues = {
  subject: "",
  message: "",
};

export default function Connect() {
  let [values, setValues] = useState(initialValues);
  let [errorMessage, setErrorMessage] = useState("");

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
    <div>
      <h3>Questions? Or looking to collaborate?</h3>
      <h3>Connect with me here!</h3>
      <FormSocialContainer>
        <FormContainer>
          <SubjectField placeholder="Subject" onChange={changeHandler}></SubjectField>
          <MessageField
            placeholder="Message"
            onChange={changeHandler}
          ></MessageField>
          <SubmitButton onClick={submitHandler}>Open Mail</SubmitButton>
        </FormContainer>
        <SocialContainer>
          {data.iconLinks.map((icon) => {
            return <IconButton key={icon.id} data={icon}/>
          })}
        </SocialContainer>
      </FormSocialContainer>
      <p>Full Tech stack?</p>
    </div>
  );
}
