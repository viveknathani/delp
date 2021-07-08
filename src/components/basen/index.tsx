import * as React from 'react';
import * as baseCore from './core';
import '../../styles/basen.css';

function AnyBase(): JSX.Element {

    // State
    const [number, setNumber] = React.useState<number>(0);
    const [base, setBase] = React.useState<number>(2);
    const [result, setResult] = React.useState<string>('');

    return (
        <div className="basen">
            <p id="tagline">convert your number in base 10 to any base between 2 and 35</p>
            <input placeholder="number" type="number" id="number-input" onChange={(e) => setNumber(e.target.valueAsNumber)}></input>
            <input placeholder="base" type="number" id="base-input" onChange={(e) => setBase(e.target.valueAsNumber)}></input>
            <button onClick={() => setResult(baseCore.toAnyBase(number, base))}>Submit</button>
            <p id="res">{result}</p>
        </div>
    );
}

export default AnyBase;
