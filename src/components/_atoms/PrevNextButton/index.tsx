import React from 'react'
import {wrap} from "./styles.module.scss";
import {colors, fontSizes, whitespaces} from "../../../styles";
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';

interface IProps {
  direction: 'prev' | 'next'
  onClick?: () => void
  backgroundColor?: colors
  iconColor?: colors
  marginBottom?: whitespaces;
  marginTop?: whitespaces;
  marginLeft?: whitespaces;
  marginRight?: whitespaces;
}

const PrevNextButton = ({
                          direction,
                          onClick,
                          backgroundColor,
                          iconColor,
                          marginBottom,
                          marginTop,
                          marginLeft,
                          marginRight
                        }: IProps) => (
  <button
    className={wrap}
    style={{
      backgroundColor: backgroundColor ? backgroundColor : colors.gray,
      marginBottom: marginBottom ? marginBottom : 0,
      marginTop: marginTop ? marginTop : 0,
      marginLeft: marginLeft ? marginLeft : 0,
      marginRight: marginRight ? marginRight : 0,
    }}
    onClick={onClick}
  >
    {direction === 'prev'
      ? <ChevronLeft color={iconColor ? iconColor : colors.blue} size={fontSizes.xl}/>
      : <ChevronRight color={iconColor ? iconColor : colors.blue} size={fontSizes.xl}/>
    }
  </button>
)

export default PrevNextButton
