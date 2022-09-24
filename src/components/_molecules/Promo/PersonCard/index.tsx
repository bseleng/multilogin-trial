import React from 'react'
import TextDiv from "../../../_atoms/TextDiv";
import {rubikLight, rubikMedium} from "../../../../styles/variables.module.scss";
import {colors, fontSizes, lineHeights, whitespaces} from "../../../../styles";
import {textWrap, wrap} from './styles.module.scss';

interface IProps {
  text: string
  personInfo: string
  imagePath: string
  photoOnLeft: boolean
  borderColor?: colors
}

const PersonCard = ({text, imagePath, photoOnLeft, personInfo, borderColor}: IProps) => {
  return (
    <div
      className={wrap}
      style={{
        borderColor: borderColor ? borderColor : colors.black
      }}
    >
      {photoOnLeft
        ? <img src={imagePath} alt={'photo: ' + personInfo}/>
        : null
      }
      <div className={textWrap}>
        <TextDiv
          text={text}
          fontFamily={rubikLight}
          fontSize={fontSizes.s}
          lineHeightPercent={lineHeights.pc165}
        />
        <TextDiv
          text={personInfo}
          fontFamily={rubikMedium}
          lineHeightPercent={lineHeights.pc195}
          marginTop={whitespaces.px10}

        />
      </div>

      {!photoOnLeft
        ? <img src={imagePath} alt={'photo: ' + personInfo}/>
        : null
      }

    </div>
  )
}

export default PersonCard
