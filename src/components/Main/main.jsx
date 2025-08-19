import Column from '../Column/Column';
import { cardList } from '../../data';
import { useState, useEffect } from 'react';
import { MainWrapper, MainBlock, MainContent, LoadingContainer } from './Smain';

export default function Main() {
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrapper className="main">
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <LoadingContainer>Данные загружаются...</LoadingContainer>
          ) : (
            <MainContent>
              {statuses.map((status) => (
                <Column key={status} title={status} cards={cardList.filter((card) => card.status === status)} />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </MainWrapper>
  );
}