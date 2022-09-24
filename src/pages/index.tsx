import * as React from "react"
import type {HeadFC} from "gatsby"
import TextDiv from "../components/_atoms/TextDiv";

const IndexPage = () => {
  const test = 'test'

  return (
    <>
      <TextDiv
        text={test}
      />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
