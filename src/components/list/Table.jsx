import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tdata from './Tdata';
import Popup from './Popup';
import './Table.css';

const Table = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState({
    apiInfoList: [],
    testList: [],
    accountList: [],
    transactionDetailsList: [],
    depositBasicInfoList: [],
    depositDetailInfoList: [],
    fundBasicInfoList: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = {
          apiInfoList: 'http://localhost:24830/api/api_info',
          testList: 'http://localhost:24830/api/test',
          accountList: 'http://localhost:24830/api/account',
          transactionDetailsList: 'http://localhost:24830/api/transaction_details',
          depositBasicInfoList: 'http://localhost:24830/api/deposit_basic_info',
          depositDetailInfoList: 'http://localhost:24830/api/deposit_detail_info',
          fundBasicInfoList: 'http://localhost:24830/api/fund_basic_info',
        };

        const requests = Object.entries(endpoints).map(([key, url]) =>
          axios.get(url).then((res) => ({ key, data: res.data }))
        );

        const results = await Promise.all(requests);

        const newData = results.reduce((acc, { key, data }) => {
          acc[key] = data;
          return acc;
        }, {});

        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className='section'>
      <table className='list'>
        <thead className='list-header-column'>
          <tr>
            <th className='list-column-title'></th>
            <th className='list-column-title'>API 이름</th>
            <th className='list-column-title'>API 엔드포인트</th>
            <th className='list-column-title'>METHOD</th>
            <th className='list-column-title'>API URL</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.apiInfoList.map(item => (
            <Tdata key={item.id} item={item} onRowClick={handleRowClick} />
            ))}
        </tbody>
      </table>
      {selectedItem && <Popup item={selectedItem} onClose={closePopup} />}
    </div>
  );
}

export default Table;