import styled, { createGlobalStyle } from 'styled-components';
import { slideInLeft, slideOutLeft } from './Slider';
import { Colors } from './Colors';
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body{
  font-family: "metropolis-regular";
  margin: 0 !important;
  padding: 0 !important;
  background-color: #000000;
  min-height: 100vh;
  height:1005;
  color: ${Colors.white};
}
`;

export const LayoutWrapper = styled.div`
  min-width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const HomeWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0.8rem;
  background-color: #000000;

  &.page-enter {
    animation: ${slideInLeft} 1s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 1s forwards;
  }

  .background__copy {
    opacity: 0.3;
  }

  .content__title {
    top: 25%;
    font-family: 'domine-regular', serif;
    font-size: 1.8rem;
    font-weight: normal;
    mix-blend-mode: screen;
    line-height: 1.4;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    color: ${Colors.white};
    z-index: 20;
    position: relative;
    letter-spacing: 0.2rem;
  }

  h3 {
    top: 25%;
    font-family: 'metropolis-medium', sans-serif;
    font-size: 0.8rem;
    line-height: 1.286;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: white;
    margin-top: 0;
    margin-bottom: 3rem;
    padding-left: 55px;
    z-index: 20;
    position: relative;
    &:before {
      content: '';
      display: block;
      background-color: rgba(236, 0, 140, 0.6);
      width: 40px;
      height: 1px;
      position: absolute;
      left: 0;
      top: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 3rem;
    flex-wrap: nowrap;
    .content__title {
      font-size: 2.8rem;
      text-align: left;
    }
    h3 {
      top: 25%;
      font-family: 'metropolis-medium', sans-serif;
      font-size: 0.8rem;
      line-height: 1.286;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      color: white;
      margin-top: 0;
      margin-bottom: 3rem;
      padding-left: 55px;
      z-index: 20;
      position: relative;
      &:before {
        content: '';
        display: block;
        background-color: rgba(236, 0, 140, 0.6);
        width: 40px;
        height: 1px;
        position: absolute;
        left: 0;
        top: 50%;
      }
    }
  }
`;

export const HomeLeftContainer = styled.div`
  z-index: 20;
  position: relative;
`;
export const HomeRightContainer = styled.div`
  z-index: 20;
  position: relative;
  text-align: center;
`;
