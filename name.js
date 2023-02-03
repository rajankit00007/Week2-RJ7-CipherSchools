import React, { useState } from "react";
// class Name extends Component {
//     state = {name : "Ankit Raj!" };

//     constructor(props){
//         super(props);
//         this.setName = this.setName.bind(this);
//     }
//     setName(e) {
//     this.setState({...this.state,name : "Ankit Raj"})
//     }
//     render(){
//         return(
//         <>
//         <h1> The name is : {this.state.name}</h1>
//         <button onClick={this.setName}> Click Me! </button>
//         </>
//         );

//     }
// }
// export default Name;

const  Name = () => {
    const [state, setState] = useState({name : "Ankit Raj!!!!!"});
let setName = (e) => {
    setState({...state,name : "Ankit Raj"});
};
testHandler = () => {
    console.log("testHandler");
}
render() {
    return (
        <>
        <h1>
            The name is : {state.name}
        </h1>
        <button onClick={setName}>Click Me!</button>
        </>
    );


    }; 
}

export default Name;
