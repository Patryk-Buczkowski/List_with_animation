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
  const [personToRemove, setPersonToRemove] = useState<Person | null>(null);

  const handlerVisibleList = () => {
    setVisibleList(current => !current);
  };

  const handlerVisibleForm = () => {
    setVisibleform(current => !current);
  };

  const addPerson = (person: Person) => {
    person.id = listItems.length + 1;
    setLIstItems(current => current.concat(person));
  };

  const removePerson = (numberId: number) => {
    if (selPerson?.id === numberId) {
      setSelPerson(null);
    }
    setLIstItems(current =>
      current.filter(item => {
        return item.id !== numberId;
      }),
    );
  };

  const selectPerson = (person: Person) => {
    setPersonToRemove(person);
  };

  const choosePerson = (numberId: number) => {
    const foundPerson = listItems.find(item => item.id === numberId);
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
            selectPerson={selectPerson}
            personToRemove={personToRemove}
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
              <p>Age: {selPerson?.age} ✅</p>
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
