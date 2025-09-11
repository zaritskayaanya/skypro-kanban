import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(234, 238, 246, 1);
`;
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FWrapper = styled.div`
  display: block;
  margin: 0 auto;
  background-color:rgba(255, 255, 255, 1);
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid rgba(212, 219, 229, 1);
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);`;

export const FTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: rgba(0, 0, 0, 1);
  font-style: bold;
  letter-spacing: -3%;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
`;

export const FormGroupP = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(148, 166, 190, 0.4);
  letter-spacing: -1%;
  text-align: center;
`;

export const FormGroupPLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(148, 166, 190, 0.4);
  letter-spacing: -1%;
  text-decoration: underline rgba(148, 166, 190, 0.4);
  text-align: center;
`;