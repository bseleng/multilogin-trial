import React from 'react'
import TextDiv from "../../../_atoms/TextDiv";
import {rubikLight, rubikMedium} from "../../../../styles/variables.module.scss";
import {colors, fontSizes, whitespaces} from "../../../../styles";
import {textWrap, wrap} from './styles.module.scss';

interface IProps {
  text: string
  personInfo: string
  imagePath: string
  isOdd: boolean
  borderColor?: colors
}

const PersonCard = ({text, imagePath, isOdd, personInfo, borderColor}: IProps) => {
  return (
    <div
      className={wrap}
      style={{
        borderColor: borderColor ? borderColor : colors.black
      }}
    >
      {isOdd
        ? <img src={imagePath} alt={'photo: ' + personInfo}/>
        : null
      }
      <div className={textWrap}>
        <TextDiv
          text={text}
          fontFamily={rubikLight}
          fontSize={fontSizes.s}
          lineHeightPercent={165}
        />
        <TextDiv
          text={personInfo}
          fontFamily={rubikMedium}
          lineHeightPercent={195}
          marginTop={whitespaces.px10}

        />
      </div>

      {!isOdd
        ? <img src={imagePath} alt={'photo: ' + personInfo}/>
        : null
      }

    </div>
  )
}

export default PersonCard
