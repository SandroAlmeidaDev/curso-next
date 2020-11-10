import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  a {
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`
