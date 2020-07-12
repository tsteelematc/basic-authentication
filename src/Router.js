const { useEffect } = require("react");

import 
    React
    ,  { 
        useState
        , useEffect 
    } from 'react';

import { 
    HashRouter
    , Switch
    , Route
} from 'react-router-dom';

import Nav from './Nav';
import Public from './Public'
import Protected from './Protected';
import Profile from './Profile';

const Router = () => {
    //
    // First time using state... Brother...
    //
    // Function returns an array with two items, a value and a function
    //
    // The value is initialized in the useState() parameter, this case the
    // string 'home'...
    //
    // Destructuring the returned array into two constants ! ! !
    //
    // Before we destructured and object, now an array...
    // 
    // Maybe another repl.it to clarify ? ? ?
    //
    // An array with two items...
    // const a = [
    //     'Tom'
    //     , () => window.alert('Function')
    //   ]
    //
    //   // Destructurint two items into constants...
    //   const [name, func, z] = a;
    //
    //   // Using the new constants...
    //   console.log(name);
    //   // And call the func
    //   func();
    //
    //   console.log(z); // Undefined...
    //   name = 'Taylor'; // Readonly const... Change to let above...
    //
    //   // Mess around with wrong numbers in array and 
    //   // destructoring for fun : - )
  
    const [currentRoute, setCurrentRoute] = useState('home');

    //
    // Function in function, weird... Closures ! ! !
    //
    // Trust it for now ! ! !
    //
    const setRoute = () => {
        const location = window.location.href.split('/');
        const pathname = location[location.length - 1];
        setCurrentRoute(pathname ? pathname : 'home');
    }

    // Skeleton in useEffect first ! ! !
    useEffect(
        () => {
            setRoute();
            window.addEventListener('hashchange', setRoute);
        }
        , []
    );

    return (
        <HashRouter>
        <Nav current={current} />
        <Switch>
          <Route exact path="/" component={Public}/>
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/profile" component={Profile}/>
          <Route component={Public}/>
        </Switch>
      </HashRouter>
    );
}

export default Router;