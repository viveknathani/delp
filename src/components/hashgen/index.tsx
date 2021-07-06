import * as React from 'react';
import {
    bcrypt,
    md5,
    sha256,
    sha512
} from 'hash-wasm';
import '../../styles/hash.css'

function HashGenerator(): JSX.Element {

    // State
    const [input, setInput] = React.useState<string>('sample');
    const [hash, setHash] = React.useState<any>({});

    // Calculate all hashes
    const computeHash = async () => {
        const result: any = {};

        let pwd: string = input;
        if (pwd == '') {
            pwd = ' ';
        }
        result.bcrypt = await bcrypt({password: pwd, 
                                      salt: new Uint8Array(16), 
                                      costFactor: 8,
                                    outputType: 'encoded'});
        result.sha256 = await sha256(input);
        result.sha512 = await sha512(input);
        result.md5 = await md5(input);   
        setHash(result);
    }

    // Change hash results when the input changes.
    // This effectively tied the state of hash with 
    // state of input since computeHash just makes a call to setHash
    // at the end
    React.useEffect(() => {
        computeHash();
    }, [input]);

    return (
        <div className="hash-gen">
            <p id="tagline">generate different hashes by just typing in the text box!</p>
            <label>your input here:</label>
            <input id="input" value={input}
            onChange={(e) => setInput(e.target.value)}></input>
            <div id="result">
                <p><span className="desc">bcrypt:</span>{hash.bcrypt}</p>
                <p><span className="desc">md5:</span>{hash.md5}</p>
                <p><span className="desc">SHA256:</span>{hash.sha256}</p>
                <p><span className="desc">SHA512:</span>{hash.sha512}</p>
            </div>
        </div>
    );
}

export default HashGenerator;
