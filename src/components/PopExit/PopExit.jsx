import { useNavigate } from "react-router-dom";
import {
  PopExitAN,
  PopExitAY,
  PopExitBlock,
  PopExitButtonN,
  PopExitButtonY,
  PopExitContainer,
  PopExitFormGroup,
  PopExitH,
  PopExitTtl,
  SPopExit,
} from "./PopExit.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const PopExit = () => {
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout()
    navigate("/sign-in");
  }
  function handleLogState(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <SPopExit>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <PopExitH>Выйти из аккаунта?</PopExitH>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitButtonY onClick={handleLogout} id="exitYes">
                <PopExitAY>Да, выйти</PopExitAY>{" "}
              </PopExitButtonY>
              <PopExitButtonN onClick={handleLogState} id="exitNo">
                <PopExitAN>Нет, остаться</PopExitAN>{" "}
              </PopExitButtonN>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </SPopExit>
  );
};

export default PopExit;