import styled from "styled-components";

export const PopNewCardCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  display: block;
  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  font-weight:600;
  padding: 0 7px;
  color: #000000;
  font-size: 10px;
  line-height: 1;
  @media screen and (max-width: 660px) {
    padding: 0;
}
`;

export const CalendarPeriod = styled.div`
padding: 0 7px;

@media screen and (max-width: 660px) {}
`;

export const CalendarDateEnd = styled.p`
margin-top:14px;
color: rgba(148, 166, 190, 1);
font-size: 14px;
`;

export const CalendarDateEndSpan = styled.span`
color: #000;
padding-left: 4px;
`;