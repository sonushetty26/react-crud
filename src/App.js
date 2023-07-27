import React from 'react'
import Pnf from './component/Pnf'
import Home from './component/Home'
import Menu from './component/Menu'  /*default imports*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'  /* { } =>const/ typed / named imports */
import Login from './Auth/Login';
import Register from './Auth/Register';
import Update from './component/Update';
import Create from './component/Create';
import PrivateRoutes from './PrivateRoute/PrivateRouter'
function App(props){
return(
  <BrowserRouter>
   <Menu/>
  <Routes>
   <Route  element={<PrivateRoutes/>}>
    <Route path={`/`} element={<Home/>}/>
    <Route  path={`/create`} element={<Create/>}/>
    <Route  path={`/update/:id`} element={<Update/>}/>
   </Route>
    <Route path={`/login`} element={<Login/>}/>
    <Route  path={`/register`} element={<Register/>}/>
    <Route  path={`/*`} element={<Pnf/>}/>
   
  </Routes>
  </BrowserRouter>
)
}
export default App