import { useContext } from "react";
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

  return (
    <SMain>
      <SContainer>
        <MainBlock>
          <MainContent>
            {defaultColumnTitles.map((title, index) => {
              const filteredTasks = Array.isArray(tasks)
                ? tasks.filter((task) => task.status === title)
                : [];

              return (
                <Column
                  key={index}
                  title={title}
                  tasks={filteredTasks}
                  loading={loading}
                />
              );
            })}
          </MainContent>
        </MainBlock>
      </SContainer>
    </SMain>
  );
};

export default Main;