import { DayPicker } from "react-day-picker";
import "./style.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import {
  CalendarDateEnd,
  CalendarDateEndSpan,
  CalendarPeriod,
  CalendarTtl,
  PopNewCardCalendar,
} from "./Calendar.styled";

const Calendar = ({ selected, setSelected, readOnly }) => {
  let footer = (
    <CalendarPeriod>
      <CalendarDateEnd>Выберите срок исполнения</CalendarDateEnd>
    </CalendarPeriod>
  );

  if (selected) {
    footer = (
      <CalendarPeriod>
        <CalendarDateEnd>
          Срок исполнения:
          <CalendarDateEndSpan>
            {format(selected, "dd.MM.yy", { locale: ru })}
          </CalendarDateEndSpan>
        </CalendarDateEnd>
      </CalendarPeriod>
    );
  }

  return (
    <PopNewCardCalendar>
      <CalendarTtl>Даты</CalendarTtl>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        locale={ru}
        footer={footer}
        disabled={readOnly}
      />
    </PopNewCardCalendar>
  );
};

export default Calendar;