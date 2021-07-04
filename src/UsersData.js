import React from 'react';

const UsersData = ({ results, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <ul className="ui list">
                {userList(results)}
            </ul>
        </div>
    )
}
function userList(results) {
    console.log(results);
    if (results && results.data && results.data.length > 0) {
        return results.data.map(user =>
            <div key={user.id}>
                <div className="ui segment">
                    <div className="ui card">
                        <div className="content">
                            <img class="right floated mini ui image" src={user.avatar} alt="image" />
                            <div class="header">
                                {user.first_name}{user.last_name}
                            </div>
                            <div class="description">
                                Email:-{user.email}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    } else {
        return (<li>Data not found.</li>);
    }
}
export default UsersData;
