import React from 'react';
import './people.scss';
import { Person } from '../Types/Person';

interface PeopleListProps {
  people: Person[];
  onRemove: (id: number) => void;
  onSelect: (id: number) => void;
}

const animationContainer = (
  <div className='peopleList__containerAnimation'>
    <img src="../Media/onRemoveAnimation.gif" alt="animation on remove" />
  </div>
)


export const PeopleList: React.FC<PeopleListProps> = ({
  people,
  onRemove,
  onSelect,
}) => {

  const handlerRemove = (number: number) => {
    onRemove(number);

  };
  return (
    <ul className="peopleList">
      {people.map(person => (
        <React.Fragment key={person.id}>
          <li className="peopleList__item">
            {person.name}
            <button
              onClick={() => handlerRemove(person.id)}
              type="button"
              className="peopleList__button"
            >
              🦈 remove 🦈
            </button>
            <button
              onClick={() => onSelect(person.id)}
              type="button"
              className="peopleList__button"
            >
              ✅choose✅
            </button>
          </li>
        </React.Fragment>
      ))}
      {animationContainer}
    </ul>
  );
};
