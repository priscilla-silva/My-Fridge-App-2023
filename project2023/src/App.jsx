import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Login from "./Login/Login";
import Timeline from "./Timeline/Timeline";
import SignUp from "./Login/Signup"; 

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Login />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/timeline" element={<Timeline />} />
      </>
    )
  )

  return ( 
    <div className="App">
        <RouterProvider router={router} />  
    </div>
   );
}
 
export default App;