import * as React from 'react';
import '../../styles/home.css';

// Defining props used by Home component
interface Props {
    goAway: () => void
}

/**
 * The component which displays the tagline, perks and provides a button
 * to switch to the main page.
 * @param props Type defined above, a function is passed from the parent
 *              component which changes the state of the parent and opens up
 *              the feature page.
 */
function Home(props: Props): JSX.Element {
    return(
        <div className="home">

            <div id="github">
                <a href="https://github.com/viveknathani/delp" target="_blank" rel="noreferrer">delp on GitHub</a>
            </div>

            <div id="content">
                <p id="logo">delp</p>
                <p id="tagline">all your dev tools in one place</p>
                <p className="description">
                    <span>delp </span> 
                    lets you as a developer to have all the daily tools open in one tab
                </p>     
                <p className="description"> 
                    you can encode content, generate hashes, play with JSON, diff texts, 
                    what not!
                </p>
                <div id="contain">
                    <button id="start" onClick={() => props.goAway()}>get started! &#128640;</button>
                    <div id="perks">
                        <p>free &#9989;</p>
                        <p>open source &#9989;</p>
                        <p>requires no auth &#9989;</p>
                        <p>has no ads &#9989;</p>
                    </div>
                </div>    
            </div>

        </div>
    );
}

export default Home;
