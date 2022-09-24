import {Link} from 'gatsby';
import React from 'react';
import HeaderLogo from '../../_atoms/HeaderLogo';


const Header = () => {
  return (
    <Link to={'/'}>
      <HeaderLogo/>
    </Link>
  )
}

export default Header
