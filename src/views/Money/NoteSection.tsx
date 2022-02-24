import React, {ChangeEventHandler} from 'react'
import styled from 'styled-components'
import {Input} from 'components/Input'

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 16px;
`;

type Props = {
  value: string
  onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注"
             type="text"
             value={note}
             onChange={onChange}
             placeholder="请填写备注"/>
    </Wrapper>
  )
}

export {NoteSection}