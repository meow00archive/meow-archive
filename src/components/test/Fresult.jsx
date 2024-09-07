import React from 'react';

const Fresult = ({ result }) => {
    return (
        <div className="result-container">
            <h3>결과:</h3>
            <pre className="result-output">{result}</pre>
        </div>
    );
};

export default Fresult;