import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  > .output {
    background: white;
    font-size: 36px;
    line-height: 60px;
    text-align: right;
    padding: 0 12px;
  }
`

const Output: React.FC = () => {
  return (
    <Wrapper>
      <div className="output">
        <span>￥</span>
        <span>100</span>
      </div>
    </Wrapper>
  )
}

export {Output}