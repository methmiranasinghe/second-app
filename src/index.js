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

    constructor(props) {
        super(props)
        this.state = { latitude: null,errorMessage:'' }


        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage :error.message})
            }
        );
    }
    render(){
      
        //return(
            // <div>
            //     <h3>{this.state.latitude}</h3>
            //     <h3>{this.state.errorMessage}</h3>
            // </div>
            //)
            if(this.state.errorMessage && !this.state.latitude){
                return <div>{this.state.errorMessage}</div>

            }
            if(!this.state.errorMessage && this.state.latitude){
                return<div>{this.state.latitude}</div>

            }
            else{
                return <div>Loading ...</div>
            }
        
    }
}





ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)




