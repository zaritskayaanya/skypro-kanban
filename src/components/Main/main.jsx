import Column from "../Column/Column";
import { SContainer } from "../Header/Header.styled";
import { SMain, MainBlock, MainContent } from "./Main.styled";

const Main = ({ loading }) => {
  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <SMain>
      <SContainer>
        <MainBlock>
          <MainContent>
            {columnTitles.map((title, index) => (
              <Column loading={loading} key={index} title={title} />
            ))}
          </MainContent>
        </MainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;
