import React from 'react';
import PropTypes from 'prop-types';
import {NavbarType} from './types'



function Navbar ({ name='myValue' }: NavbarType) {
  return <div>hi navbar {name}</div>;
}

// https://fettblog.eu/typescript-react/prop-types/

//Navbar.propTypes = {
//  name: PropTypes.string.isRequired
//}

export default Navbar;


