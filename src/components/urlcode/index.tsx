import * as React from 'react';
import * as urlcode from './core';
import '../../styles/urlcode.css';

/**
 * Manage useState functions as an object
 */
 interface StateHandlers {
    setEncoded: React.Dispatch<React.SetStateAction<string>>,
    setDecoded: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Handle change in input field
 * @param event     The event that signifies change
 * @param changers  The object of type StateHandlers
 * @returns         Nothing
 */
 function handleChange(event: React.ChangeEvent<HTMLInputElement>, changers: StateHandlers): void {
    const input: string = (event.target.value);
    changers.setEncoded(urlcode.encode(input));
    changers.setDecoded(urlcode.decode(input));
}

function URLCode(): JSX.Element {

    // State
    const [encoded, setEncoded] = React.useState<string>(' ');
    const [decoded, setDecoded] = React.useState<string>(' ');

    return (
        <div className="urlcode">
            <label>your input here:</label>
            <input id="input" onChange={(event) => handleChange(event, {
               setEncoded,
               setDecoded 
           })}></input>
            <div id="result">
                <p className="desc">encoded</p>
                <p id="en">{encoded}</p>
                <p className="desc">decoded</p>
                <p id="de">{decoded}</p>
            </div>
        </div>
    );
}

export default URLCode;
