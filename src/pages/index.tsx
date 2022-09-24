import * as React from "react"
import type {HeadFC} from "gatsby"
import Promo from "../components/_templates/Promo";

const IndexPage = () => <Promo/>

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
