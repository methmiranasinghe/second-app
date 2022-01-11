import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {

    
//     return(
//         <div>
//            <h1>Latitude:</h1> 
//         </div>
//     )
// }

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                <h3>You are in the nothern hemisphere</h3>
            </div>
        )
    }
}





ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)




