import * as React from 'react';
import StringStats from '../strstats/index';
import URLCode from '../urlcode/index';
import HashGenerator from '../hashgen';
import AnyBase from '../basen';
import Base64 from '../base64';
import '../../styles/main.css';

/**
 * Returns the valid className, used for applying CSS selectively.
 * @param inputValue    The existing value
 * @param toMatchWith   The value that should exist
 * @returns             The valid className
 */
function getClassName(inputValue: number, toMatchWith: number): string {
    return (inputValue === toMatchWith) ? 'selected' : 'unselected';
}

/**
 * The main component under which all features are listed and all feature
 * components are rendered.
 */
function Main(): JSX.Element {

    // The value that will change upon feature selection.
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // Store of all feature components.
    const feature : Array<JSX.Element> = [
                    <p key='0'></p>,
                    <StringStats key='1'/>,
                    <URLCode key='2'/>,
                    <HashGenerator key='3'/>,
                    <AnyBase key='4'/>,
                    <Base64 key='5'/>
                ];

    return(
        <div className="main">
            <div id="panel">

                <p id="logo">delp</p>
                <button 
                    className={getClassName(1, selectedIndex)} 
                    onClick={() => setSelectedIndex(1)}>
                    string statistics
                </button>
                <button className={getClassName(2, selectedIndex)}
                        onClick={() => setSelectedIndex(2)}>
                    URL encode/decode        
                </button>
                <button className={getClassName(3, selectedIndex)}
                        onClick={() => setSelectedIndex(3)}>
                    hash generator
                </button>
                <button className={getClassName(4, selectedIndex)}
                        onClick={() => setSelectedIndex(4)}>
                    number to any base
                </button>
                <button className={getClassName(5, selectedIndex)}
                        onClick={() => setSelectedIndex(5)}>
                    base64 encode/decode
                </button>
            </div>

            {/* Selective display of feature */}
            <div id="feature">{feature[selectedIndex]}</div>
        </div>
    );
}

export default Main;
