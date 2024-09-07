import React from 'react';
import './Table.css';

const Tdata = ({ item, onRowClick }) => {
  return (
    <tr className='list-row' onClick={() => onRowClick(item)}>
      <td className="list-column">{item.id || item.id}</td>
      <td className="list-column">{item.api_name || item.name}</td>
      <td className="list-column">{item.resource || item.endpoint || ''}</td>
      <td className="list-center">{item.http_method || item.method}</td>
      <td className="list-column">{item.uri || item.url}</td>
    </tr>
  );
}

export default Tdata;