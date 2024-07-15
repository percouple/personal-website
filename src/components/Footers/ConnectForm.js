import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { StyledButton } from "../../styles/universalStyles";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  justify-content: space-between;
  height: 12rem;
`;

const SubmitButton = styled(StyledButton)`
  min-height: 2rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
  font-size: medium;
`;

const EmailField = styled.input`
  overflow-wrap: normal;
  outline: none;
  min-height: 1.25rem;
`;

const MessageField = styled.input`
  min-height: 5rem;
  min-width: 10rem;
  margin-bottom: 0.5rem;
  overflow-wrap: normal;
  outline: none;
`;

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
export default function ContactForm() {
  const [state, handleSubmit] = useForm("manwnjpz");
  if (state.succeeded) {
    return (
      <p>
        Thanks for reaching out! I'll get back to you within 2 business days
      </p>
    );
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <EmailField id="email" type="email" name="email" placeholder="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <MessageField id="message" name="message" placeholder="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <SubmitButton type="submit" disabled={state.submitting}>
        Connect!
      </SubmitButton>
    </FormContainer>
  );
}
