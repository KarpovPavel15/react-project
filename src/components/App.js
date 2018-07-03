import Article from './Article';
import React from 'react';
import content from '../fixtures';

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article content={content[0]}/>
        </div>
    )
}
export default App;