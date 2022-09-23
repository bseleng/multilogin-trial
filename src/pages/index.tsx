import * as React from "react"
import type {HeadFC} from "gatsby"
import {italic, regular, lightItalic, light, mediumItalic, medium, m, xl, s, l} from "../styles/common.module.scss"

const IndexPage = () => {
  const test = 'test'

  return (
    <>
      <div className={`${italic} ${m}`}>{test}</div>
      <div className={`${regular} ${xl}`}>{test}</div>
      <div className={`${lightItalic} ${xl}`}>{test}</div>
      <div className={`${light} ${s}`}>{test}</div>
      <div className={`${mediumItalic} ${xl}`}>{test}</div>
      <div className={`${medium} ${l}`}>{test}</div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
