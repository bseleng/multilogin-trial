import React from 'react'
import TextDiv from '../../../_atoms/TextDiv'
import {fontSizes, lineHeights} from "../../../../styles";
import {rubikLightItalic} from "../../../../styles/variables.module.scss";
import {subtitleWrap} from "./styles.module.scss";

interface IProps {
  title: string
  subtitle: string
}


const Title = ({title, subtitle}: IProps) => {
  return (
    <>
      <TextDiv
        text={title}
        fontSize={fontSizes.xxl}
        lineHeightPercent={lineHeights.pc99}

      />
      <div className={`${subtitleWrap}`}>
        <TextDiv
          text={subtitle}
          fontSize={fontSizes.l}
          fontFamily={rubikLightItalic}
          lineHeightPercent={lineHeights.pc147}

        />
      </div>
    </>
  )
}

export default Title
