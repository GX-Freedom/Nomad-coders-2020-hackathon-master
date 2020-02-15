import React from "react";
import pug from "react-pug";
import Login from "./Login";
import Index from "./index";
import Header from "./Header";
import Join from "./Login";


// import './index.css';
// import * as serviceWorker from './serviceWorker';


//const Ho = pug.compileFile("home.pug");

// function Home(props) {

//     //ReactDOM.render(<Join/>, document.getElementById("root"));
//     return (
//         console.log(props), <Index />
//     );
// }

class Home extends React.Component {

    render() {

        return (

            <div id="root">
                <Index />
            </div>
        );

    }
}
// serviceWorker.unregister();

export default Home; 