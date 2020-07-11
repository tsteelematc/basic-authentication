import React from 'react';
import Container from './Container';

//
// Could do lambda, fat arrow, function... 
//
// But book uses function keyword...
//
// Good place to show they are the 'same' ! ! !
//
//const Public = () => {}

function Public () {
    return (
        <Container>
            <h1>
                Public Route . . . 
            </h1>
        </Container>
    );
}

export default Public;
