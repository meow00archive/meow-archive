import React from 'react';

const Finput = ({ label, name, type = "text", value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                type={type} 
                name={name}
                value={value} // value 속성 추가
                onChange={(e) => onChange(name, e.target.value)} 
                className="form-control" 
            />
        </div>
    );
};

export default Finput;