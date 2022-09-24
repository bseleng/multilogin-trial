import {rubikRegular} from '../../../styles/variables.module.scss'
import React from 'react'
import {colors, fontSizes, lineHeights} from '../../../styles'

interface IProps {
  text: string
  fontSize?: fontSizes
  color?: colors
  fontFamily?: string
  lineHeightPercent?: lineHeights
}

const TextDiv = ({
                   text,
                   fontSize,
                   color,
                   fontFamily,
                   lineHeightPercent,
                 }: IProps) => {

  return (
    <div
      style={{
        fontSize: fontSize ? fontSize : fontSizes.m,
        color: color ? color : colors.black,
        fontFamily: fontFamily ? fontFamily : rubikRegular,
        lineHeight: lineHeightPercent ? lineHeightPercent : lineHeights.pc100,
      }}
      className={`text-start`}
    >
      {text}
    </div>
  )

}

export default TextDiv
