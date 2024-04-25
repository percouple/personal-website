import React from "react";
import styled from "styled-components";
import { StyledButton, StyledInputField } from "../../styles/universalStyles";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const SubmitButton = styled(StyledButton)`
  min-height: 2rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
`;

const MessageField = styled(StyledInputField)`
  min-height: 5rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
  /* max-width: 1rem; */
  /* max-height: 1rem; */
`;

const SubjectField = styled(StyledInputField)`
  min-height: 1.25rem;
  min-width: 15rem;
  max-width: 1rem;
  max-height: 1rem;
  margin-bottom: 0.5rem;
`;

export default function ConnectForm(props) {
  return (
    <FormContainer>
      <SubjectField
        placeholder="Subject"
        onChange={props.changeHandler}
      ></SubjectField>
      <MessageField
        placeholder="Message"
        onChange={props.changeHandler}
      ></MessageField>
      <SubmitButton onClick={props.submitHandler}>Open Mail</SubmitButton>
    </FormContainer>
  );
}
