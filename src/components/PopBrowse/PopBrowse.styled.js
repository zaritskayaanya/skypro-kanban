import styled from "styled-components";

export const SPopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
    @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 650px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
    @media screen and (max-width: 660px) {
    border-radius: 0;
  }
    @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
   @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const PopBrowseStatus = styled.div`
`;

export const Categories = styled.div`
 margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const CategoriesP = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $background }) => $background};
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
export const ActiveCategory = styled.p`
  opacity: 1 !important;
`;

export const CategoriesThemeActive = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $background }) => $background};
 opacity: 1 !important;
`;

export const CategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: ${({ $color }) => $color};
  white-space: nowrap;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: #94a6be;
  padding: 10px 17.5px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  margin-top:14px;
`;

export const StatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const Subttl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusSubttlP = styled(Subttl)`
  ${StatusThemeP}; 
`;

export const CategoriesPSubttl = styled(CategoriesP)`
${Subttl}
`;

export const Hide = styled.div`
  display: none;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
}
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
}
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
    @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
}
`;

export const PopBrowseBtnEdit = styled.button` 
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
   &:hover {
  background-color: #33399b;
  color: #ffffff;
}
     @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
}
`;

export const PBButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
    @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
}
`;

export const BtnGroup = styled.div`
  margin-right: 8px;
    @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
}
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
}
  &::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
}
   @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
}
`;

export const BtnBor = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
    @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
}
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  &:hover {
  background-color: #33399b;
  color: #ffffff;
}
`;

export const BtnBorA = styled.p`
  color: #565eef;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  &:hover {
  color: #ffffff;
}
`;

export const BtnBg = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 0px;
    @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
}
 border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  &:hover {
  background-color: #33399b;
}
`;

export const BtnBgA = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
 color: #ffffff;
`;

export const Gray = styled.p`
  background: #94a6be;
  color: #ffffff;
`;

export const White = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 10px 17.5px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  margin-top:14px;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#94a6be")};
  background: ${(props) => (props.$isActive ? "#94a6be" : "#ffffff")};
`;

export const ErrorPB = styled.p`
font-weight: 600;
  font-size: 14px;
  color: rgba(248, 77, 77, 1);
  letter-spacing: -1%;
  text-align: left;
  margin-bottom: 10px ;
`