import styled from 'styled-components'

export const Container = styled.div`
  &:hover {
    opacity: 0.7;
  }

  div {
    padding: 1.2em 0;
    margin: 0px;
    padding: 0px;
    border: 0px;
    box-sizing: border-box;
    vertical-align: baseline;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }

    svg {
      float: none;
      padding: inherit;
      margin: 0;
    }
  }
`
