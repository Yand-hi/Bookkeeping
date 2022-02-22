import React, {useRef} from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      color: #576b95;
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 60px;
      border: none;
    }
  }
`;

type Props = {
  value: string
  onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const changValue = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>添加备注</span>
        <input type="text"
               placeholder="请输入备注"
               ref={refInput}
               defaultValue={note}
               onBlur={changValue}
        />
      </label>
    </Wrapper>
  )
}

export {NoteSection}