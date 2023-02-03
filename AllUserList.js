import React, { Component, useState } from "react";
import Test from "./testing";
import UserDetails from "./UserDetails";


// const AllUserList =() => {
//     const[state, setState]= useState({
//    name: "Priyanshu Saxena" ,    
//     })
//     let allUsers =[
//         {name: "John",email : "john@email.com",phoneNumber : "+91-8357438579"},
//     {name : "Shreyus", email: "shreyus@email.com", phoneNumber: "+91-9738734393"},
//     { name : "Nilanjan", email: "nilanjan@email.com", phoneNumber: "+91-3937987392"}
// ];

// let setStateName = (name) => {
//     setState({...state,name});
// };
// return (
//         <div>
//             <test name={state.name} setName = {setStateName} />
//             {allUsers.map((user,index) => (
//                 <UserDetails key={index} user={user} />
//             ))}
//         </div>
//     );
//     };





// let array = allUsers.map((user,index) => (
//     <UserDetails key={index} user={user} />
// ));



//  return (
//     <div>
//         <UserDetails user={allUsers[0]} />
//         <UserDetails user={allUsers[1]} />
//         <UserDetails user={allUsers[2]} />
//     </div>
// );



// return (
//     <div>
//         <test />
//         {allUsers.map((user,index) => (
//             <UserDetails key={index} user={user} />
//         ))}
//     </div>
// );
// };



const AllUserList =() => {
   const [state,setstate] = useState({name: "Priyanshu Saxena"});
   return (
    <h1> The name is Priyanshu Saxena</h1>
   )
};

class AllUserList extends Component{
       state = {
        name: "Priyanshu Saxena",
       };

       componentDidMount(){
        console.log("All User List was mounted!");
       }
     
    
     setStateName = (name) => {
       this.setState({...this.state,name});
    };

    
    allUsers =[
                    {name: "John",email : "john@email.com",phoneNumber : "+91-8357438579"},
                {name : "Shreyus", email: "shreyus@email.com", phoneNumber: "+91-9738734393"},
                { name : "Nilanjan", email: "nilanjan@email.com", phoneNumber: "+91-3937987392"}
            ];
    
    render(){
    return (
            <div>
                <Test name={this.state.name} setName = {this.setStateName} />
                {this.allUsers.map((user,index) => (
                    <UserDetails key={index} user={user} />
                ))}
            </div>
        );
        };
    };

 export default AllUserList;