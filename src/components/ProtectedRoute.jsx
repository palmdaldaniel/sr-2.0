import { useContext, useEffect, useState } from "react/cjs/react.development";
import { UserContext } from "../contexts/UserProvider";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
 const { isAuth } = useContext(UserContext);


  return ( <Route {...rest} render={
    props => {
      if (isAuth) {
        return <Component {...rest} {...props} />
      } else {
        return <Redirect to={
          {
            pathname: '/',
            state: {
              from: props.location
            }
          }
        } />
      }
    }
  } />)
};  

export default ProtectedRoute;
