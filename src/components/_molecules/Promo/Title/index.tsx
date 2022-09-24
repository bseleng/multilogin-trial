import React from 'react'
import TextDiv from '../../../_atoms/TextDiv'
import {fontSizes} from "../../../../styles";
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
        fontSize={fontSizes.xl}
        lineHeightPercent={99}

      />
      <div className={`${subtitleWrap}`}>
        <TextDiv
          text={subtitle}
          fontSize={fontSizes.l}
          fontFamily={rubikLightItalic}
          lineHeightPercent={147}

        />
      </div>
    </>
  )
}

export default Title