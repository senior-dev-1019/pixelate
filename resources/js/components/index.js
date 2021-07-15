import React from 'react';
import ReactDOM from 'react-dom';

function index() {
    return (
            <div> 
                <input type="text"></input>
                <button>submit</button>
                <a href="/manege">manege</a>
                <Spinner animation="border" variant="primary" />
            </div>
    );
}

export default index;

if (document.getElementById('index')) {
    ReactDOM.render(<index />, document.getElementById('home'));
}
