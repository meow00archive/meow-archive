// Thead.jsx
import React from 'react';
import './Table.css';
import Tdata from './Tdata';

const Thead = ({ list, onRowClick }) => {
  return (
    <tbody className="table-column">
      {list.map(item => (
        <Tdata key={item.id} item={item} onRowClick={onRowClick} />
      ))}
    </tbody>
  );
}

export default Thead;