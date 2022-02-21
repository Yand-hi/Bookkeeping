import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import {TagsSection} from './Money/TagsSection'
import {CategorySection} from './Money/CategorySection'
import {NotesSection} from './Money/NotesSection'
import {NumberPadSection} from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money = () => {
  return (
    <MyLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
        <span className="date">
          2月21日
          <Icon name={"down"}/>
        </span>
      </CategorySection>
      <TagsSection/>
      <NotesSection>
        <label>
          <span>添加备注</span>
          <input type="text" placeholder="请输入备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="pad clearfix">
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
      </NumberPadSection>
    </MyLayout>
  );
}
export default Money