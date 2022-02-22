import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import {Output} from './Output'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .pad {
    background: #fafafa;

    > button {
      background: white;
      font-size: 24px;
      float: left;
      width: 25%;
      height: 64px;
      border-radius: 8px;
      border: 4px solid #fafafa;

      &.ok {
        background: #3eb575;
        color: white;
        height: 192px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState<string>('0')
  const setOutput = (output: string) => {
    if (output.length > 9) {
      output = output.slice(0, 9)
    } else if (output.length === 0) {
      output = ''
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break
      case '.':
        if (output.indexOf('.') >= 0) return
        setOutput(output + '.')
        break
      case '':
        if (output.length === 1) {
          setOutput('')
        } else {
          setOutput(output.slice(0, -1))
        }
        break
      case '确定':
        console.log(text)
        break
    }
  }
  return (
    <Wrapper>
      <div className="pad clearfix"
           onClick={onClickButtonWrapper}>
        <Output>{output}</Output>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          <Icon name="delete"/>
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="ok">确定</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection}