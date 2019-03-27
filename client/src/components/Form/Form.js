import React, { useState } from 'react';
import PropTypes from 'prop-types';
import User from '../User/User.apollo';

import './Form.css';

const Form = ({ setUserTime }) => {
    const [username, handleUserName] = useState('');
    const [usertime, handleUserTime] = useState(0);
    const [isOpenUser, handleIsOpenUser] = useState(false);

    const [error, setError] = useState('');

    const resetState = () => {
        handleUserName('');
        handleUserTime(0);
        setError('');
    };

    const obSubmit = async (e) => {
        e.preventDefault();
        if (!username.length) {
            setError('Введите пользователя');
            return;
        }

        if (usertime < 1000) {
            setError('Введите время больше 1000 ms');
            return;
        }

        try {
            await setUserTime({variables: {username: `${username}`, time: +usertime}});
            handleIsOpenUser(true);
        } catch (e) {
            handleIsOpenUser(false);
        }
    };

    return (
        <>
            {isOpenUser ? <User
                username={username}
                handleIsOpenUser={handleIsOpenUser}
                resetState={resetState}
            /> :
            <div className="form-user">
                <form onSubmit={obSubmit}>
                    <div className="form-group">
                        <label className="form-label">User name</label>
                        <input
                            value={username}
                            onChange={e => handleUserName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="User name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Time(ms)</label>
                        <input
                            value={usertime}
                            onChange={e => handleUserTime(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Time"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
                {error.length ? <div className="error-message">{error}</div> : null}
            </div>}
        </>
    )
};

Form.propTypes = {
    setUserTime: PropTypes.func,
};

User.defaultProps = {
    setUserTime: () => {},
};

export default Form;
