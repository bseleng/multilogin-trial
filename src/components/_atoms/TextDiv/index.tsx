import {rubikRegular} from '../../../styles/variables.module.scss'
import React from 'react'
import {colors, fontSizes, whitespaces} from '../../../styles'

interface IProps {
  text: string
  fontSize?: fontSizes
  color?: colors
  marginBottom?: whitespaces;
  marginTop?: whitespaces;
  marginLeft?: whitespaces;
  marginRight?: whitespaces;
  fontFamily?: string
  lineHeightPercent?: number
}

const TextDiv = ({
                   text,
                   fontSize,
                   color,
                   marginBottom,
                   marginTop,
                   marginLeft,
                   marginRight,
                   fontFamily,
                   lineHeightPercent,
                 }: IProps) => {

  return (
    <div
      style={{
        fontSize: fontSize ? fontSize : fontSizes.m,
        color: color ? color : colors.black,
        marginBottom: marginBottom ? marginBottom : 0,
        marginTop: marginTop ? marginTop : 0,
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : 0,
        fontFamily: fontFamily ? fontFamily : rubikRegular,
        lineHeight: lineHeightPercent ? lineHeightPercent + '%' :'100%',
      }}
      className={`text-start`}
    >
      {text}
    </div>
  )

}

export default TextDiv
