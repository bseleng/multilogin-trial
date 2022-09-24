import React from "react";
import HeaderLogoImage from '../../../images/Header/headerLogo.png'
import {wrap} from "./styles.module.scss";

const HeaderLogo = () => (
  <img className={wrap} src={HeaderLogoImage} alt="header logo"/>
)

export default  HeaderLogo
