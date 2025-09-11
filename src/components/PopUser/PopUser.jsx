import { Link } from "react-router-dom";
import {
  Checkbox,
  HeaderPopUserSet,
  PopUserSetA,
  PopUserSetButton,
  PopUserSetmail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeP,
} from "./PopUser.styled";

const PopUser = () => {
  return (
    <HeaderPopUserSet>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetmail>ivan.ivanov@gmail.com</PopUserSetmail>
      <PopUserSetTheme>
        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
        <Checkbox type="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <Link to="/exit">
        <PopUserSetButton type="button">
          <PopUserSetA>Выйти</PopUserSetA>
        </PopUserSetButton>
      </Link>
    </HeaderPopUserSet>
  );
};

export default PopUser;
