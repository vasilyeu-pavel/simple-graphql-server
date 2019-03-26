import React, { useState } from 'react';
import Preloader from '../Preloader/Preloader';

import './Form.css';

const Form = ({ loading, setUserTime }) => {
    const [userName, setUserName] = useState('');
    const [userTime, setUserTame] = useState('');
    const [timer, setTimer] = useState(0);

    const obSubmit = async (e) => {
        e.preventDefault();

        const { data: { setTime: { time, username: usernameFromServer } } } = await setUserTime({
            variables: { username: `${userName}`, time: +userTime },
        });

        setTimer(time);

        setUserName('');
        setUserTame('');
    };

    if (loading) return <Preloader />;

    return (
        <div className="form-user">
            <form onSubmit={obSubmit}>
                <div className="form-group">
                    <label className="form-label">User name</label>
                    <input
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="User name"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Time</label>
                    <input
                        value={userTime}
                        onChange={e => setUserTame(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Time"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
};

export default Form;
