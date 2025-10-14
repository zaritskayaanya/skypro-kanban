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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const PopUser = () => {
  const { user } = useContext(AuthContext);

  return (
    <HeaderPopUserSet>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetmail>{user.login}</PopUserSetmail>
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