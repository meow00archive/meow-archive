import React, { useState } from 'react';
import axios from 'axios';
import Finput from './Finput';
import Fresult from './Fresult';
import './Form.css';

const Form = () => {
    const [method, setMethod] = useState('');
    const [endpoint, setEndpoint] = useState('');
    const [params, setParams] = useState({});
    const [result, setResult] = useState('');

    const getEndpointsByMethod = () => {
        if (method === 'GET') {
            return [
                { value: '/oauth/2.0/authorize', label: '인가코드 발급 요청' },
                { value: '/accounts', label: '계좌 목록 조회' },
            ];
        } else if (method === 'POST') {
            return [
                { value: '/accounts/deposit/basic', label: '수신계좌 기본정보 조회' },
                { value: '/accounts/deposit/detail', label: '수신계좌 추가정보 조회' },
                { value: '/accounts/deposit/transactions', label: '수신계좌 거래내역 조회' },
                { value: '/accounts/invest/basic', label: '펀드상품계좌 기본정보 조회' },
            ];
        }
        return [];
    };

    const handleParamChange = (key, value) => {
        setParams(prevParams => ({ ...prevParams, [key]: value }));
    };

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
        setEndpoint(''); // 엔드포인트를 리셋
        setParams({}); // 파라미터 값을 리셋
        setResult(''); // 결과를 리셋
    };

    const handleEndpointChange = (e) => {
        setEndpoint(e.target.value);
        setParams({}); // 파라미터 값을 리셋
        setResult(''); // 결과를 리셋
    };

    const handleRequest = async (e) => {
        e.preventDefault();
    
        const requestData = {
            method: method.toLowerCase(),
            url: `https://virtserver.swaggerhub.com/MyDataKorea/MyData_3.0/2024.02.16${endpoint}`,
            headers: {
                'accept': 'application/json',
                'x-api-tran-id': params['x-api-tran-id'],
                'x-api-type': params['x-api-type'],
                'Authorization': `Bearer ${params['authorization'] || ''}`
            },
            data: method === 'POST' ? {
                org_code: params['org_code'],
                account_num: params['account_num'],
                search_timestamp: params['search_timestamp'],
                ...(endpoint === '/accounts/deposit/transactions' && {
                    from_date: params['from_date'],
                    to_date: params['to_date'],
                })
            } : undefined
        };
    
        try {
            const response = await axios.post('http://localhost:24830/api/curl-request', requestData);
            setResult(JSON.stringify(response.data, null, 2));
        } catch (error) {
            setResult('요청에 실패했습니다: ' + error.message);
        }
    };

    return (
        <div className="section">
            <form onSubmit={handleRequest}>
                <table className='table'>
                    <thead className='table-head-column'>
                        <tr className='table-row'>
                            <th className='table-header-column'>HTTP Method</th>
                            <th className='table-header-column'>
                                <select 
                                    value={method} 
                                    onChange={handleMethodChange}
                                >
                                    <option value="" disabled>Method를 선택하세요</option>
                                    <option value="GET">GET</option>
                                    <option value="POST">POST</option>
                                </select>
                            </th>
                        </tr>
                        <tr className='table-row'>
                            <th className='table-header-column'>API Endpoint</th>
                            <th className='table-header-column'>
                                <select 
                                    value={endpoint} 
                                    onChange={handleEndpointChange}
                                    disabled={!method} // method가 선택되지 않으면 비활성화
                                >
                                    <option value="" disabled>Endpoint를 선택하세요</option>
                                    {getEndpointsByMethod().map((ep, index) => (
                                        <option key={index} value={ep.value}>{ep.label}</option>
                                    ))}
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {method && endpoint && (
                            <>
                                <Finput label="기관코드 (org_code)" name="org_code" value={params['org_code'] || ''} onChange={handleParamChange} />
                                {method === 'POST' && (
                                    <Finput label="계좌번호 (account_num)" name="account_num" value={params['account_num'] || ''} onChange={handleParamChange} />
                                )}
                                {endpoint === '/accounts/deposit/transactions' && (
                                    <>
                                        <Finput label="시작일자 (from_date)" name="from_date" type="date" value={params['from_date'] || ''} onChange={handleParamChange} />
                                        <Finput label="종료일자 (to_date)" name="to_date" type="date" value={params['to_date'] || ''} onChange={handleParamChange} />
                                    </>
                                )}
                                <Finput label="거래 고유번호 (x-api-tran-id)" name="x-api-tran-id" value={params['x-api-tran-id'] || ''} onChange={handleParamChange} />
                                <Finput label="API 유형 (x-api-type)" name="x-api-type" value={params['x-api-type'] || ''} onChange={handleParamChange} />
                                <Finput label="Authorization 토큰" name="authorization" value={params['authorization'] || ''} onChange={handleParamChange} />
                            </>
                        )}
                        <tr className='table-row'>
                            <td className="table-column" colSpan="2">
                                <button type="submit">API 요청 보내기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {result && <Fresult result={result} />}
        </div>
    );
};

export default Form;