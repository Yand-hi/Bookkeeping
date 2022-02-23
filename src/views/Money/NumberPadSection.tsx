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

type Props = {
  value: number,
  onChange: (amount: number) => void,
  onOk?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, setOutput] = useState(props.value.toString())
  const _setOutput = (output: string) => {
    let newOutput: string
    if (output.length > 10) {
      newOutput = output.slice(0, 10)
    } else {
      newOutput = output
    }
    setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    if (text === '确定') {
      if (props.onOk) props.onOk()
    }
    _setOutput(generateOutput(text, output))
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