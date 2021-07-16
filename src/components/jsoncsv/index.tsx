import * as React from 'react';
import * as converter from './core';

function isEmpty(input: string): boolean {

    for (let i = 0; i < input.length; i++){
        if (input[i] !== ' ') {
            return false;
        }
    }
    return true;
}

function JSONCSV(): JSX.Element {
     // State
     const [input, setInput] = React.useState<string>('');
     const [result, setResult] = React.useState<string>('');
 
     const compute = (input: string) => {
        if (input[0] !== '[' && input[input.length - 1] !== ']'
            && !isEmpty(input)) {
            const fields = Object.keys(JSON.parse(input)[0]);
            const res = converter.getCSV({fields}, input);
            console.log(fields);
            setResult(res);
        }
     }
 
     React.useEffect(() => {
         compute(input);
     }, [input]);
 
     return(
         <div id="csvjson">
             <p id="tagline">convert JSON to CSV</p>
             <textarea placeholder="your json array" id="box" onChange={(e) => setInput(e.target.value)}></textarea>
             <textarea placeholder="your csv" id="result" value={result}></textarea>
         </div>
     );
}

export default JSONCSV;
