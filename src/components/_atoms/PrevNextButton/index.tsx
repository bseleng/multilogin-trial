import React from 'react'
import {wrap} from "./styles.module.scss";
import {colors, fontSizes} from "../../../styles";
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';

interface IProps {
  direction: 'prev' | 'next'
  onClick?: () => void
  backgroundColor?: colors
  iconColor?: colors
  isDisabled?: boolean
}

const PrevNextButton = ({
                          direction,
                          onClick,
                          backgroundColor,
                          iconColor,
                          isDisabled
                        }: IProps) => (
  <button
    className={wrap}
    style={{
      backgroundColor: backgroundColor ? backgroundColor : colors.gray,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
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
