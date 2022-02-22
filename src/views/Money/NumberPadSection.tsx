import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import {Output} from './NumberPadSection/Output'
import {generateOutput} from './NumberPadSection/generateOutput'

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
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    if (text === '确定') console.log('ok')
    setOutput(generateOutput(text, output))
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