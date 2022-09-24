import React, {useState} from 'react';
import {PersonCardContent} from '../../../../types/Promo';
import PrevNextButton from '../../../_atoms/PrevNextButton';
import PersonCard from "../../../_molecules/Promo/PersonCard";
import {cardsWrap, wrap} from "./styles.module.scss";
import {whitespaces} from "../../../../styles";

interface IProps {
  persons: PersonCardContent []
}

const PersonSlider = ({persons}: IProps) => {
  const [page, setPage] = useState(0)

  const noNext = page + 2 > persons.length
  const noPrev = page == 0

  const goNext = () => {
    if (!noNext) {
      setPage(page + 2)
    }
  }
  const goPrev = () => {
    if (!noPrev) {
      setPage(page - 2)
    }
  }

  return (
    <div className={wrap}>
      <PrevNextButton
        direction={'prev'}
        onClick={goPrev}
        marginRight={whitespaces.px40}
        isDisabled={noPrev}

      />
      <div className={cardsWrap}>
        <PersonCard
          content={persons[page]}
          photoOnLeft={true}
        />

        {!noNext
          ? <PersonCard
            content={persons[page + 1]}
            photoOnLeft={false}
            marginTop={whitespaces.px28}
          />
          : null
        }

      </div>
      <PrevNextButton
        direction={'next'}
        onClick={goNext}
        marginLeft={whitespaces.px40}
        isDisabled={noNext}
      />
    </div>
  )
}

export default PersonSlider
