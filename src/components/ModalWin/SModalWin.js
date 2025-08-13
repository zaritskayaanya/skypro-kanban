import styled from "styled-components";

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  /* Стили для кнопки */
  & button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid #565eef;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #33399b;
      color: #ffffff;
    }
  }

  /* Стили для ссылок */
  & a {
    color: #565eef;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const PopUserSetName = styled.p`
  color: #000; /* делаем текст чётким и ярким */
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be; /* светлый серый, хорошо читается */
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    color: #000; /* делаем текст ярким и читаемым */
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin: 0;
  }

  & input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #94a6be;
      transition: all 0.3s ease;
    }

    &:checked {
      background: #565eef;

      &::before {
        left: 12px;
        background-color: #ffffff;
      }
    }
  }
`;
