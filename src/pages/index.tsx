import * as React from "react"
import type {HeadFC} from "gatsby"
import Title from "../components/_molecules/Promo/Title";
import PersonCard from "../components/_molecules/Promo/PersonCard";
import Adam1 from '../images/Promo/Persons/Adam1.png'
import Adam2 from '../images/Promo/Persons/Adam2.png'

const IndexPage = () => {
  return (
    <>
      <Title
        title={'Claim the offer'}
        subtitle={'To claim, simply fill in your email below and follow the instructions that appear.'}
      />

      <PersonCard
        text={'“Virtual machines just weren’t feasible. The process was ‘hope and pray’ they don’t ban you. So I realized I needed something to protect us.”'}
        personInfo={'Adam, Owner, Rocket 31'}
        isOdd={true}
        imagePath={Adam1}
      />

      <PersonCard
        text={'“Virtual machines just weren’t feasible. The process was ‘hope and pray’ they don’t ban you. So I realized I needed something to protect us.”'}
        personInfo={'Adam, Owner, Rocket 31'}
        isOdd={false}
        imagePath={Adam2}
      />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
