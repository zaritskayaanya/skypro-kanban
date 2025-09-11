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
const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  }
  function handleLogState(e) {
    e.preventDefault();
    setIsAuth(true);
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
