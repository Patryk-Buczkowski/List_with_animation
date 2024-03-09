import React, { FormEventHandler, useState } from 'react';
import { Person } from '../Types/Person';
import { people } from './people';
import './people.scss';

type Props = {
  onDataReady: (person: Person) => void;
};

export const PeopleForm: React.FC<Props> = ({ onDataReady }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [adult, setAdult] = useState(false);
  const [id, setId] = useState(people.length + 1);

  const handleSubmitForm: FormEventHandler = event => {
    event.preventDefault();
    let findId = Math.max(...people.map(person => person.id)) + 1;

    setId(findId);

    onDataReady({ id, name, lastName, age, adult });
    setAdult(false);
    setAge(0);
    setLastName('');
    setName('');
  };

  return (
    <form className="formPeople" onSubmit={handleSubmitForm}>
      <div className="formPeople__inputContainer">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div className="formPeople__inputContainer">
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="LastName"
          name="LastName"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>

      <div className="formPeople__inputContainer">
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          min={0}
          name="age"
          value={age}
          onChange={event => setAge(+event.target.value)}
        />
      </div>

      <div className="formPeople__inputContainer">
        <label htmlFor="adult">Adult: </label>
        <input
          type="checkbox"
          id="adult"
          name="adult"
          checked={adult}
          onChange={event => setAdult(event.target.checked)}
        />
      </div>

      <button>Add 😀 to 📜</button>
    </form>
  );
};
