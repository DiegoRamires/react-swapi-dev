import styled from 'styled-components'
import { shade } from 'polished'

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #4b7ef4;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#4b7ef4')}
    }
  }
`
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

export const ResultSearch = styled.div`
  a {
    text-decoration: none;
    margin-top: 20px;
    border-radius: 10px;
    max-width: 700px;
    padding: 10px 15px;
  }
  strong {
  display: flex;
  align-items: center;
  margin-top: 16px
  }

`
