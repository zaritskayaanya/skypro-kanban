import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 10px;
  background-color: inherit;
  border: 0.7px solid rgba(148, 166, 190, 0.4);;
  font-size: 14px;

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
  border: 0.7px solid rgba(148, 166, 190, 0.4);;
  font-size: 14px;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }

  ${({ $error }) => $error && `outline: 0.7px solid rgba(248, 77, 77, 1);`}
`;