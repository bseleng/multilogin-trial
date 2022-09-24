import * as React from "react"
import type {HeadFC} from "gatsby"
import Title from "../components/_molecules/Promo/Title";
import CentralLogo from "../components/_molecules/Promo/CentralLogo";
import Header from "../components/_organisms/Header";
import Footer from "../components/_organisms/Footer";
import PersonSlider from "../components/_organisms/Promo/PersonSlider";
import persons from '../mockData/persons'

const IndexPage = () => {
  return (
    <div className={'container'}>
      <div className={'row mt-4 mb-4'}>
        <div className={'column'}>
          <Header/>
        </div>
      </div>
      <Title
        title={'Claim the offer'}
        subtitle={'To claim, simply fill in your email below and follow the instructions that appear.'}
      />

      <PersonSlider
        persons={persons}
      />

      <CentralLogo/>

      <Footer/>

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
