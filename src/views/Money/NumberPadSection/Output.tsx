import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  left: 10px;
  top: 21vh;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 60px;
    text-align: right;
    padding: 0 12px;

    > .number {
      margin-left: 10px;
    }
  }
`

const Output: React.FC = (props) => {
  return (
    <Wrapper>
      <div className="output">
        <span>￥</span>
        <span className="number">{props.children}</span>
      </div>
    </Wrapper>
  )
}

export {Output}