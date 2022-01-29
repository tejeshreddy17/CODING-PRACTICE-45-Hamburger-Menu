// Style your elements here
import styled from 'styled-components'

export const SmallImageStyle = styled.img`
  display: block;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const LargeImageStyle = styled.img`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    height: 550px;
  }
`
