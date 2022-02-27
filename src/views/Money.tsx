import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'
import { useRecords } from '../hooks/useRecords'
import { message } from 'antd'

const MyLayout = styled(Layout)`
  display: flex;
  position: relative;
  flex-direction: column;
`

type Category = '0' | '1'

const defaultFormData = {
  category: '0' as Category,
  tagId: [] as number[],
  note: '',
  amount: 0
}
const Money: React.FC = () => {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecord } = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const submit = () => {
    if (addRecord(selected)) {
      message.success('已添加一笔')
      setSelected(defaultFormData)
    }
  }
  return (
    <MyLayout>
      <CategorySection value={selected.category}
        onChange={category => onChange({ category })} />
      <TagsSection value={selected.tagId}
        types={selected.category}
        onChange={tagId => onChange({ tagId })} />
      <NoteSection value={selected.note}
        onChange={note => onChange({ note })} />
      <NumberPadSection value={selected.amount}
        types={selected.category}
        onChange={amount => onChange({ amount })}
        onOk={submit} />
    </MyLayout>
  );
}
export default Money