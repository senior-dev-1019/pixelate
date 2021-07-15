import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";

function User() {
    return (
            <div> 
                <div className="page-header header-filter">
                    <Container>
                        <div className="content-center brand">
                        <h1 className="h1-seo">BLK• React</h1>
                        <h3 className="d-none d-sm-block">
                            A beautiful Design System for Bootstrap 4 (reactstrap) and React.
                            It's Free and Open Source.
                        </h3>
                        </div>
                    </Container>
                </div>
                <div>
                    <button>insert</button>
                </div>
            </div>
    );
}

export default User;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}