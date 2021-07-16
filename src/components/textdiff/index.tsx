import * as React from 'react';
import diff from 'fast-diff';
import '../../styles/textdiff.css';

function TextDiff(): JSX.Element {

    // State
    const [left, setLeft] = React.useState<string>('left');
    const [right, setRight] = React.useState<string>('right');

    const compute = (left: string, right: string) => {
        const res = diff(left, right);
        console.log(res);
        const display = document.getElementById('textdiff-display');
        const fragment = document.createDocumentFragment();
        res.forEach(function(part){
            const color = part[0] === 1 ? 'green' :
              part[0] === -1 ? 'red' : 'white';
            const span = document.createElement('span');
            span.style.color = color;
            span.appendChild(document
              .createTextNode(part[1]));
            fragment.appendChild(span);
          });
        
        while (display?.hasChildNodes()) {
            const child = display.lastChild;
            if (child !== null) {
                display.removeChild(child);
            }
        }

        display?.appendChild(fragment);
    }

    React.useEffect(() => {
        compute(left, right);
    }, [left, right])

    return(
        <div id="textdiff">
            <p id="tagline">text diff</p>
            <textarea placeholder="left" id="box" onChange={(e) => setLeft(e.target.value)}></textarea>
            <textarea placeholder="right" id="result" onChange={(e) => setRight(e.target.value)}></textarea>
            <div id="textdiff-display"></div>
        </div>
    );
}

export default TextDiff;
