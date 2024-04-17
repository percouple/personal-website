import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton, StyledInputField } from "../styles/universalStyles";

const EmailField = styled(StyledInputField)`
  min-height: 1.25rem;
  min-width: 15rem;
  max-width: 1rem;
  max-height: 1rem;
`;
const MessageField = styled(StyledInputField)`
  min-height: 1.25rem;
  min-width: 10rem;
  /* max-width: 1rem; */
  /* max-height: 1rem; */
`;
const SubmitButton = styled(StyledButton)`
  min-height: 2rem;
  min-width: 10rem;
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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    justify-content: start;
    margin-right: 2rem;
`;
const SocialContainer = styled.div`
`;

const initialValues = {
    emailAddress: '',
    message: '',
}

export default function Connect() {

  let [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    console.log(e.target.placeholder);
    switch (true) {
        case (e.target.placeholder === "Email"): {
            setValues({...values, emailAddress: e.target.value});
            break;
        }
        case (e.target.placeholder === "Message"): {
            setValues({...values, message: e.target.value});
            break;
        }
        default: {
            setValues({...values})
        }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Watcher
  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div style={{alignItems: "center"}}>
      <h3>Connect With Me!</h3>
      <FormSocialContainer>
        <SocialContainer>
            Here's all your social icons and junk
        </SocialContainer>
        <FormContainer>
          <EmailField
            placeholder={"Email"}
            onChange={changeHandler}
          ></EmailField>
          <MessageField
            placeholder={"Message"}
            onChange={changeHandler}
          ></MessageField>
          <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
        </FormContainer>
      </FormSocialContainer>
      <p>Full Tech stack?</p>
    </div>
  );
}
