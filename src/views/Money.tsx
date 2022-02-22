import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
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
                       onChange={(category) => setSelected({
                         ...selected,
                         category
                       })}/>
      <TagsSection value={selected.tag}
                   onChange={(tag) => setSelected({
                     ...selected,
                     tag
                   })}/>
      <NoteSection value={selected.note}
                   onChange={(note) => setSelected({
                     ...selected,
                     note
                   })}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => setSelected({
                          ...selected,
                          amount
                        })}
                        onOk={() => {
                          console.log('OK')
                        }}/>
    </MyLayout>
  );
}
export default Money