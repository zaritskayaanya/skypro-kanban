import { useContext, useMemo } from "react";
import { TasksContext } from "../../context/TasksContext";
import Column from "../Column/Column";
import { SContainer } from "../Header/Header.styled";
import { SMain, MainBlock, MainContent } from "./Main.styled";

const defaultColumnTitles = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const { tasks, loading } = useContext(TasksContext);

  const columnTitles = useMemo(() => {
  if (!tasks || tasks.length === 0) {
    return defaultColumnTitles;
  }

  const uniqueStatuses = [...new Set(tasks.map((task) => task.status))];
  const allStatuses = [...new Set([...defaultColumnTitles, ...uniqueStatuses])];
  return allStatuses;
}, [tasks]);


  return (
    <SMain>
      <SContainer>
        <MainBlock>
          <MainContent>
            {columnTitles.map((title, index) => (
              <Column
                key={index}
                title={title}
                tasks={tasks.filter((task) => task.status === title)}
                loading={loading}
              />
            ))}
          </MainContent>
        </MainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;