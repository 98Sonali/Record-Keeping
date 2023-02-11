
import './App.css';
import Header from './Header';
import React, {useState} from 'react';
import { number } from 'prop-types';
// import Movie from './Movie';
// import movies from './movie.json'
function App() {
  const [num, setNum] = useState(1); //Array destructuring
  function inc() {

    setNum(num+1);
  }
  function dec(){
    setNum(num -1);
  }
  // let login = false;
  // if(login==false){
  //   return<h1>Ja mai tujhe nhi dikhaunga..!!</h1>
  // }

  return (
    <div className="App">
    <Header/>
    
    <div className= 'main'>
    <h1 className='heading'>{num}</h1>
      <div classname='buttons'>
      <button className='btn' onClick={inc}>incremeent</button>
      <button className="btn" onClick={dec}>decrement</button>
      </div>
      </div>
       {/* <div className='main'>
       {
        movies.map((element,index) =>{
          return(
          <Movie 
          key={index}
            title={element.Title}
            year={element.Year}
            img={element.Poster}
          />
          )
        })
       }
       

       </div> */}
    </div>
  );
}


export default App;



// (() =>{
//   if(login){
//     return <h1 style={{color:'black'}}>Dekh le bhai</h1>
//     } else {
//       return <h1 style={{color:'black'}}>Dekh na le bhai</h1>

//     }
//   }
// })( )
// }
// If else statement
// Ternary operator

// React Hooks
// Hooks are a new addition in react 16.8. They let u use state and other react features without writing a class.
// React hooks is the alternative approach of state management and lifecycle method 
// there are many hooks used for different purposes. some of them are useReducer,useStateuseCallBack,useMemo,UseRef,useDispatcher . 
// component life cycle
// initialization: This is the stage wgere the component is constructed with the given props and default state. This is done in the constructor of a component class.
// Mounting: Mounting is the stage of rendering the jsx returned by the render method itself.
// Updating: Updating is the stage when the state of a component is updated and the application is repainted.
// Unmounting:  as the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
// UseState Hook Syntax :const [ selectedRoom , setSelectedRoom ] = useState ( initialvalue ) ;
