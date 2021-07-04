import * as React from 'react';

const App = () => {
    return (
        <div>
            <h3> Welcome to React Boilerplate </h3>
            {process.env.NODE_ENV}:{process.env.Test}
        </div>
    )
}

export default App;
