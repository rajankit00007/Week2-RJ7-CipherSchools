// import React from "react";
// import SignUpForm from "./components/SignUpFrom";
// import SumNumbers from "./components/SumNumber";
// const App = () => {
//   return (
//     <div>
//       <h1>This is App Component</h1>
//       <SignUpForm />
//     </div>
//   );
// };

// export default App;

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/header";
import SignUpForm from "./components/SignUpFrom";
import TaskScreen from "./components/taskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
import SumNumbers from "./components/SumNumber";
import higherOrderComponent from "./components/Hoc";
import SampleRenderProps from "./components/SampleRenderProps";
const App = () => {
  const TestApp = higherOrderComponent(() => {
  return <div>Test App</div>;
  });
  return(
  <div>
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path={"/"} element={<h1> This is on Home Page</h1>} />
  <Route path={"/contact"} element={<h1>This is a Contact Page</h1>} />
  <Route path={"/about"} element={<h1> This is a about Page</h1>} />
  <Route path={"/signup"} element={<SignUpForm/>} />
   <Route path={"sum"} element={<SumNumbers/>} >
  </Route> 
  <Route path={"/tasks"} element={<TaskScreen />} />
  <Route path={"/counter"} element={<CounterComponent />} />
  <Route path={"/photos"} element={<Photos />} />
  <Route path={"/test"} element={<TestApp />} />
  <Route path={"/sample"} element={<SampleRenderProps />} />
  </Routes>
  </BrowserRouter>
  </div>
  );
};
export default App;