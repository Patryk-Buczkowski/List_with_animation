import { useState } from "react";
import "./App.css";
import React from "react";

const StarRating = ({ tabIndex, rating = 0, setStarRate }) => {
    return (
        <div>
            {Array.from({ length: 5 }, (_, index) => (
                <span onClick={() => setStarRate(tabIndex, index + 1)} key={index}>
                    {index < rating ? "⭐" : "☆"}
                </span>
            ))}
        </div>
    );
};

function Tab({ schoolName, schoolLogo, firstName, lastName, children }) {
    return (
        <div>
            <h1>{schoolName}</h1>
            <img src={schoolLogo} alt="school logo" />

            <h3>firstName</h3>
            <p>{firstName}</p>

            <h3>lastName</h3>
            <p>{lastName}</p>

            {children}
        </div>
    );
}

const arr = [
    {
        schoolName: "School 1",
        schoolLogo: "url",
        firstName: "John",
        lastName: "Doe",
    },
    {
        schoolName: "School 2",
        schoolLogo: "url",
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        schoolName: "School 3",
        schoolLogo: "url",
        firstName: "Jack",
        lastName: "Doe",
    },
];

const App = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [starRate, setStarRate] = useState([]);
    const item = arr.at(currentTab);

    function handleSetStarRate(index, rating) {
        setStarRate(prev => {
            const newRating = [...prev];
            newRating[index] = rating;
            return newRating;
        });
    }

    return (
        <div>
            <Tab
                schoolName={item.schoolName}
                schoolLogo={item.schoolLogo}
                firstName={item.firstName}
                lastName={item.lastName}
            >
                <StarRating setStarRate={handleSetStarRate} tabIndex={currentTab} rating={starRate[currentTab]} />
            </Tab>

            {currentTab > 0 && <button onClick={() => setCurrentTab(prev => prev - 1)}>Previous</button>}
            {currentTab < arr.length - 1 && <button onClick={() => setCurrentTab(prev => prev + 1)}>Next</button>}
        </div>
    );
};

export default App;
