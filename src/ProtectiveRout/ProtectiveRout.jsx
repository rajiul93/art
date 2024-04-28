import PropTypes from 'prop-types';
import { useContext } from "react";
 

 import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user}  = useContext(AuthContext)
    if (user) {
        return children
    }
    return  <Navigate state={location.pathname} to='/login'/>
};

export default PrivetRout;
PrivetRout.propTypes = {
    children: PropTypes.node
    }