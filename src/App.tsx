import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { people } from './People/people';
import { PeopleList } from './People/PeopleList';
import { PeopleForm } from './People/PeopleForm';
import { Person } from './Types/Person';

export const App: React.FC = () => {
  const [visibleList, setVisibleList] = useState(true);
  const [visibleform, setVisibleform] = useState(true);
  const [listItems, setLIstItems] = useState(people);
  const [selPerson, setSelPerson] = useState<Person | null>(null);

  const handlerVisibleList = () => {
    setVisibleList(current => !current);
  };

  const handlerVisibleForm = () => {
    setVisibleform(current => !current);
  };

  const addPerson = (person: Person) => {
    setLIstItems(current => current.concat(person));
  };

  const removePerson = (numberId: number) => {
    setLIstItems(current =>
      current.filter(item => {
        return item.id !== numberId;
      }),
    );
  };

  const choosePerson = (numberId: number) => {
    const foundPerson = people.find(item => item.id === numberId);
    if (foundPerson) {
      setSelPerson(foundPerson);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="main">
        {visibleform && <PeopleForm onDataReady={addPerson} />}
        <button type="button" id="iconButton" onClick={handlerVisibleForm}>
          💥BOOM--form
        </button>

        {visibleList && (
          <PeopleList
            people={listItems}
            onRemove={removePerson}
            onSelect={choosePerson}
          />
        )}
        <button type="button" id="iconButton" onClick={handlerVisibleList}>
          💥BOOM--list
        </button>

        <div className="preview">
          CLICKED PERSON
          {selPerson ? (
            <>
              <p>Id: {selPerson?.id} ✅</p>
              <p>Name: {selPerson?.name} ✅</p>
              <p>Last Name: {selPerson?.lastName} ✅</p>
              <p>Age: {selPerson?.lastName} ✅</p>
              <p>Adult: {selPerson?.adult ? '✅' : '❌'}</p>
            </>
          ) : (
            <p>No person selected</p>
          )}
        </div>
      </main>
    </div>
  );
};
