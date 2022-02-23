import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import {TagsSection} from './Money/TagsSection'
import {NoteSection} from './Money/NoteSection'
import {CategorySection} from './Money/CategorySection'
import {NumberPadSection} from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  position: relative;
  flex-direction: column;
`

type Tag = {
  iconName: string,
  name: string
}
type Category = '-' | '+'
const Money = () => {
  const [selected, setSelected] = useState({
    category: '-' as Category,
    tag: {} as Tag,
    note: '',
    amount: 0
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {selected.category}
      <hr/>
      {selected.tag.iconName + ','}{selected.tag.name}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <TagsSection value={selected.tag}
                   onChange={tag => onChange({tag})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {
                          console.log('OK')
                        }}/>
    </MyLayout>
  );
}
export default Money