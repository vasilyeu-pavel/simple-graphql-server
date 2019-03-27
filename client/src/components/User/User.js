import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Preloader from '../Preloader/Preloader';

const User = ({ loading, username, time, handleIsOpenUser, resetState }) => {
    if (loading) return <Preloader />;

    useEffect(() => {
        (async () => {
            await (() => new Promise(resolve => setTimeout(resolve, time)))();
            handleIsOpenUser(false);
            resetState();
        })();
    }, []);

    return (
        <>
            <Preloader />
            <div>{username}</div>
        </>
    )
};

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    time: PropTypes.number,
    setUserTime: PropTypes.func.isRequired,
    handleIsOpenUser: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
};

User.defaultProps = {
    time: 0,
};

export default User;


