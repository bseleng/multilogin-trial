import React, {useState} from 'react';
import {PersonCardContent} from '../../../../types/Promo';
import PrevNextButton from '../../../_atoms/PrevNextButton';
import PersonCard from "../../../_molecules/Promo/PersonCard";
import {buttonWrap, cardsWrap, mobileButtonsWrap, wrap} from "./styles.module.scss";

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

  const PrevButton = () => (
    <PrevNextButton
      direction={'prev'}
      onClick={goPrev}
      isDisabled={noPrev}
    />
  )

  const NextButton = () => (
    <PrevNextButton
      direction={'next'}
      onClick={goNext}
      isDisabled={noNext}
    />
  )

  return (
    <div className={wrap}>
      <div className={mobileButtonsWrap}>
        <PrevButton/>
        <NextButton/>
      </div>
      <div className={buttonWrap}>
        <PrevButton/>
      </div>
      <div className={cardsWrap}>
        <PersonCard
          content={persons[page]}
          photoOnLeft={true}
        />

        {!noNext
          ? <PersonCard
            content={persons[page + 1]}
            photoOnLeft={false}
          />
          : null
        }

      </div>
      <div className={buttonWrap}>
        <NextButton/>
      </div>
    </div>
  )
}

export default PersonSlider
