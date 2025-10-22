import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 10px;
  background-color: inherit;
  border: 0.7px solid rgba(148, 166, 190, 0.4);;
  font-size: 14px;
  outline:none;
  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }

  ${({ $error }) => $error && `outline: 0.7px solid rgba(248, 77, 77, 1);`}
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 8px 10px;
  background-color: inherit;
  outline:none;
  border: 0.7px solid rgba(148, 166, 190, 0.4);;
  font-size: 14px;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }

  ${({ $error }) => $error && `outline: 0.7px solid rgba(248, 77, 77, 1);`}
`;

export const ErrorP = styled.p`
font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(248, 77, 77, 1);
  letter-spacing: -1%;
  text-align: center;
  margin-top: -7px;
`