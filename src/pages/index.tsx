import * as React from "react"
import type {HeadFC} from "gatsby"
import Title from "../components/_molecules/Promo/Title";

const IndexPage = () => {
  return (
    <>
      <Title
        title={'Claim the offer'}
        subtitle={'To claim, simply fill in your email below and follow the instructions that appear.'}
      />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
