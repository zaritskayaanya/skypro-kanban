import { HeaderPopUserSet, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./SModalWin";

const ModalWin = () => {
  return (
    <HeaderPopUserSet id="user-set-target">
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <button type="button">
        <a href="#popExit">Выйти</a>
      </button>
    </HeaderPopUserSet>
  );
};
export default ModalWin;