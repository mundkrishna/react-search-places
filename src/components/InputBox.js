import React, { useState } from 'react';

const InputBox = ({ onLimitChange }) => {
    const [limit, setLimit] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value) && value >= 1 && value <= 10) {
            setLimit(value);
            onLimitChange(value);
        }
    };

    return (
        <div className="input-box">
            <input
                type="number"
                value={limit}
                onChange={handleChange}
                placeholder="Enter limit (1-10)"
                min="1"
                max="10"
            />
        </div>
    );
};

export default InputBox;
