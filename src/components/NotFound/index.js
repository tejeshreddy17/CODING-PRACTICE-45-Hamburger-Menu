// Write your code here

import {SmallImageStyle} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <SmallImageStyle
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
      alt="not found"
    />
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </>
)
export default NotFound
