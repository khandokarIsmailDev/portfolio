import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center my-5 bg-white">
                <img className="my-5" src="/spin.svg" alt="Spinner" />
            </div>
        </div>
    );
};

export default Loading;