import React , { useContext } from 'react'
import { AuthContext } from './../Context/AuthContext';
import { Outlet , Navigate } from 'react-router-dom';

function PrivateRoutes(props){
    const context = useContext(AuthContext)
    const currentUser = context.currentUser
    return(
        <React.Fragment>
            {
                   currentUser ? <Outlet/> : <Navigate to ={ '/login'}/>
            }
        </React.Fragment>
    )
}

export default PrivateRoutes
/*div , main , section , article ,header, footer, aside  - block elements
React Fragment => virtual react block element
*/