import {Link} from 'gatsby';
import React from 'react';
import HeaderLogo from '../../_atoms/HeaderLogo';


const Header = () => {
  return (
    <div
      className={'container'}
    >
      <div className={'row'}>
        <div className={'col'}>
          <Link to={'/'}>
            <HeaderLogo/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header
