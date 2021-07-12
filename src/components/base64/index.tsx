import * as React from 'react';
import '../../styles/base64.css';

function Base64(): JSX.Element {

    // State
    const [inputEncode, setInputEncode] = React.useState<string>('');
    const [inputDecode, setInputDecode] = React.useState<string>('');
    const [result, setResult] = React.useState<string>('');

    React.useEffect(() => {
        setResult('encoded:' + btoa(unescape(encodeURIComponent(inputEncode))));
    }, [inputEncode]);

    React.useEffect(() => {
        setResult('decoded:' + decodeURIComponent(escape(atob(inputDecode))));
    }, [inputDecode]);

    return(
        <div id="base64-code">
            <p id="tagline">base64 encoder/decoder</p>
            <input placeholder="to encode" 
                   value={inputEncode} 
                   onChange={(e) => setInputEncode(e.target.value)}></input>
            <input placeholder="to decode" 
                   value={inputDecode}
                   onChange={(e) => setInputDecode(e.target.value)}></input>
            <p id="result">{result}</p>
        </div>
    );
}

export default Base64;
