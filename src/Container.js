// import something from somewhere : - )
import React from 'react';

//
// This is a function ! ! !
//
// Need to be able to squint at it and see ! ! !
//
//const Container = () => {}

//
// A function that takes an object and that object
// is expected to have a property named children. 
// 
// This is destructuring ! ! !
//
// Show some Babel desctruturing REPL code here ! ! !
//
// const o = {
// 	children: [
//     	"Taylor"
//       , "Jack"
//     ]
// }

// // Destructuring ! ! !
// const { children } = o;
// window.alert(children);


// // Array swap with destructuring...
// let a = 1;
// let b = 2;

// [b, a]  = [a, b];

// console.log(a);
// console.log(b);

// First with just div with containers ! ! !
// const Container = ({ children }) => (
//     <div>
//         { containers }
//     </div>
// )

// Then add styles...
//const Container = (props) => (
const Container = ({children}) => (
    <div
        style={styles.container}
    >
        {/* { props.children } */}
        { children }
    </div>
)

const styles = {
    container: {
        margin: '0 auto'
        , padding: '50px 100px'
    }
}

// Export the function as the default export...
export default Container;

//
// repl.it ! ! ! Maybe ? ? ?
//
// Better example, go slow ! ! !
//
// const o = {
//     children: [
//       "Taylor"
//       , "Jack"
//     ]
//   };
  
//   const {children} = o; 
//   console.log(children);
  
//   const offspring = o.children;
//   console.log(offspring);
