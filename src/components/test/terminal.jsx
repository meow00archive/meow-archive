import React, { useState } from 'react';
import axios from 'axios';
import './terminal.css';

const Terminal = () => {
    const [curlCommand, setCurlCommand] = useState('');
    const [result, setResult] = useState('');

    const handleCurlCommand = async () => {
        try {
            const jsonData = parseCurlCommand(curlCommand);
            const response = await axios.post('http://localhost:24830/api/curl-request', jsonData);
            setResult(JSON.stringify(response.data, null, 2));
        } catch (error) {
            setResult('요청에 실패했습니다: ' + error.message);
        }
    };

    const parseCurlCommand = (command) => {
        const methodMatch = command.match(/-X\s+'(\w+)'/);
        const urlMatch = command.match(/'(https?:\/\/[^\s]+)'/);
        const headersMatch = [...command.matchAll(/-H\s+'([^:]+):\s*([^']+)'/g)];
        
        const headers = headersMatch.reduce((acc, header) => {
            acc[header[1]] = header[2];
            return acc;
        }, {});

        return {
            method: methodMatch ? methodMatch[1].toLowerCase() : 'get',
            url: urlMatch ? urlMatch[1] : '',
            headers: headers
        };
    };

    return (
        <div className="terminal-container">
            <textarea
                value={curlCommand}
                onChange={(e) => setCurlCommand(e.target.value)}
                placeholder="curl 명령어를 입력하세요..."
            />
            <button onClick={handleCurlCommand}>실행</button>
            <pre className="terminal-output">{result}</pre>
        </div>
    );
};

export default Terminal;