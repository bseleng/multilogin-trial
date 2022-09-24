import {Link} from 'gatsby';
import React from 'react';
import TextDiv from '../../_atoms/TextDiv';
import {colors, lineHeights, whitespaces} from "../../../styles";
import {rubikLight, rubikMedium} from '../../../styles/variables.module.scss';
import {wrap} from "./styles.module.scss";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: colors.blue
      }}
      className={wrap}
    >
      <Link to={'/'}>
        <TextDiv
          text={'Multilogin'}
          fontFamily={rubikMedium}
          color={colors.white}
          lineHeightPercent={lineHeights.pc165}
        />
      </Link>
      <Link to={'/'}>
        <TextDiv
          text={'Pricing'}
          fontFamily={rubikLight}
          color={colors.white}
          lineHeightPercent={lineHeights.pc195}
          marginTop={whitespaces.px6}
        />
      </Link>
    </div>
  )
}

export default Footer
