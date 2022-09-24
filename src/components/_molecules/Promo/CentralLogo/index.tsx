import React from 'react'
import LineWithDots from '../../../../images/Promo/CentralLogo/LineWithDots.png'
import LogoBig from '../../../../images/Promo/CentralLogo/LogoBig.png'
import {line, logo, wrap} from "./styles.module.scss";

const CentralLogo = () => {
  return (
    <div className={wrap}>
      <img className={line} src={LineWithDots} alt="logo-line"/>
      <img className={logo} src={LogoBig} alt="logo"/>
    </div>
  )
}

export default CentralLogo
