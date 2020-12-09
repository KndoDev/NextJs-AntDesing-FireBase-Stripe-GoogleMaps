import css from "styled-jsx/css"
import { breakpoints, fonts } from "../../style/theme"

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    font-size: 20px;
  }
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
export default css`
  div {
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    display: flex;
    height: 100vh;
    place-items: center;
    justify-content: center;
  }
  main {
    z-index: 1000;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
    div {
    }
  }
`
