import React from 'react';
import Header from "../../_organisms/Header";
import Title from "../../_molecules/Promo/Title";
import PersonSlider from "../../_organisms/Promo/PersonSlider";
import persons from "../../../mockData/persons";
import CentralLogo from "../../_molecules/Promo/CentralLogo";
import Footer from "../../_organisms/Footer";

const Promo = () => {
  return (
    <div className={'container'}>
      <div className={'row mt-4 mb-4'}>
        <Header/>
      </div>

      <div className={'row'}>

        <div className={'col col-lg-3'}>
          <Title
            title={'Claim the offer'}
            subtitle={'To claim, simply fill in your email below and follow the instructions that appear.'}
          />
        </div>

        <div className={'col col-lg-2'}>
          <CentralLogo/>
        </div>

        <div className={'col col-lg-7'}>
          <PersonSlider
            persons={persons}
          />
        </div>

      </div>

      <div className={'row'}>
        <Footer/>
      </div>

    </div>
  )
}

export default Promo
