import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import {TagsSection} from './Money/TagsSection'
import {NoteSection} from './Money/NoteSection'
import {CategorySection} from './Money/CategorySection'
import {NumberPadSection} from './Money/NumberPadSection'
import {Output} from './Money/Output'

const MyLayout = styled(Layout)`
  display: flex;
  position: relative;
  flex-direction: column;
`

const Money = () => {
  return (
    <MyLayout>
      <CategorySection/>
      <Output/>
      <TagsSection/>
      <NoteSection/>
      <NumberPadSection/>
    </MyLayout>
  );
}
export default Money