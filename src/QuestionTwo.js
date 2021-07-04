
import React, { useState, useEffect } from "react";
import axios from 'axios';
import UsersData from "./UsersData";

const QuestionTwo = () => {
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            // setLoading(true);
            const res = await axios.get(`https://reqres.in/api/users?page=2`);
            if (res.data.data.length > 0) {
                setResults(res.data);
                setLoading(false);
            }
        }
        fetchUsers();
    }, ['results']);

    return (
        <div className="ui container">
            <h1 className="ui center aligned  header" >
                User's Data
            </h1>
            <UsersData results={results} loading={loading} />

        </div>
    );
}
export default QuestionTwo;
