import React, {useEffect} from 'react';
import {Auth} from 'aws-amplify';
import Container from './Container';

//
// Hmm... props is that object that has a property named children ? ? ? ! ! !
//
// Here we want the whole object ! ! !
//
// Go back an show we could use whole object and reference the children
// property in Container ! ! !
//
const Protected = (props) => {

    //
    // Squinting at useEffect, it takes a function and
    // an array of dependent props . . . 
    //
    // useEffect(
    //     // Function.
    //     () => {}
    //     // Array of dependent props.
    //     , []
    // )
    useEffect(
        // Function.
        () => {
            const checkIfUserAuthenticated = async () => {
                try {
                    await Auth.currentAuthenticatedUser()
                }
                catch {
                    props.history.push('/profile');
                }
            };
            checkIfUserAuthenticated();
        }
        // Array of dependent props.
        , []
    )

    return (
        <Container>
            <h1>Protected Route...</h1>
        </Container>
    );
}

export default Protected;
