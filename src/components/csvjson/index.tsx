import * as React from 'react';
import * as converter from './core';
import '../../styles/csvjson.css';

function CSVJSON(): JSX.Element {

    // State
    const [input, setInput] = React.useState<string>('');
    const [result, setResult] = React.useState<string>('');

    const compute = async(input: string) => {
        const res = await converter.getJSON(input)
        setResult(JSON.stringify(res, null, 2));
    }

    React.useEffect(() => {
        compute(input);
    }, [input]);

    return(
        <div id="csvjson">
            <p id="tagline">convert CSV to JSON</p>
            <textarea placeholder="your csv" id="box" onChange={(e) => setInput(e.target.value)}></textarea>
            <textarea placeholder="your json" id="result" value={result}></textarea>
        </div>
    );
}

export default CSVJSON;
