import React from 'react'
import TextDiv from "../../../_atoms/TextDiv";
import {rubikLight, rubikMedium} from "../../../../styles/variables.module.scss";
import {colors, fontSizes, lineHeights, whitespaces} from "../../../../styles";
import {textWrap, wrap} from './styles.module.scss';
import {PersonCardContent} from "../../../../types/Promo";

interface IProps {
  content: PersonCardContent
  photoOnLeft: boolean
  borderColor?: colors
  marginTop?: whitespaces
}

const PersonCard = ({content, photoOnLeft, borderColor, marginTop}: IProps) => {
  const {imagePath, personInfo, text} = content
  return (
    <div
      className={wrap}
      style={{
        borderColor: borderColor ? borderColor : colors.black,
        marginTop: marginTop ? marginTop : 0
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
