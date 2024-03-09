import React, { useState } from 'react';
import './people.scss';
import { Person } from '../Types/Person';

interface PeopleListProps {
  people: Person[];
  onRemove: (id: number) => void;
  onSelect: (id: number) => void;
  selectPerson: (peson: Person) => void;
  personToRemove: Person | null;
}

export const PeopleList: React.FC<PeopleListProps> = ({
  people,
  onRemove,
  onSelect,
  selectPerson,
  personToRemove,
}) => {
  const [visible, setVisible] = useState(false);

  const animationContainer = (
    <div className="peopleList__containerAnimation">
      <p className="peopleList__containerAnimation__paragraph">
        {personToRemove && `${personToRemove.name} ${personToRemove.lastName}`}
      </p>
    </div>
  );

  const handlerRemove = (number: number) => {
    onRemove(number);
  };

  const handlePersonToRemove = (person: Person) => {
    selectPerson(person);
  };

  return (
    <>
      <ul className="peopleList">
        {people.map(person => (
          <React.Fragment key={person.id}>
            <li className="peopleList__item">
              {person.name}
              <button
                onClick={() => {
                  setVisible(true);
                  handlePersonToRemove(person);

                  setTimeout(() => {
                    handlerRemove(person.id);
                    setVisible(false);
                  }, 4000);
                }}
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
      </ul>
      {visible && animationContainer}
    </>
  );
};
