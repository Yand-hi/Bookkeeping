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
  const [selected, SetSelected] = useState({
    category: '-' as Category,
    tag: {} as Tag,
    note: '',
    amount: 0
  })
  return (
    <MyLayout>
      {selected.tag.iconName + ','}{selected.tag.name}
      <CategorySection/>
      <TagsSection value={selected.tag}
                   onChange={(tag) => {
                     SetSelected({
                       ...selected,
                       tag
                     })
                   }
                   }/>
      <NoteSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}
export default Money