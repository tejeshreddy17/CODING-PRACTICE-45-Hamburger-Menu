// Write your code here
import {SmallImageStyle, LargeImageStyle} from './styledComponents'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <SmallImageStyle
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
      alt="home"
    />
    <LargeImageStyle
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
      alt="home"
    />
  </>
)
export default Home
