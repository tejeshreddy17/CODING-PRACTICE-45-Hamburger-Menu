// Write your code here

import {SmallImageStyle, LargeImageStyle} from './styledComponents'

import Header from '../Header'

const About = () => (
  <>
    <Header />
    <SmallImageStyle
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
    />
    <LargeImageStyle
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
    />
  </>
)
export default About
