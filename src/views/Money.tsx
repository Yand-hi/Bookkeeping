import React from 'react'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import styled from 'styled-components'
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
          <li className="selected">收入</li>
          <li>支出</li>
        </ul>
        <span className="date">
          2月21日
          <Icon name={"down"}/>
        </span>
      </CategorySection>
      <TagsSection>
        <div className="output">
          <span>￥</span>
          <span>100</span>
        </div>
        <ol>
          <li>
            <span className="icons"><Icon name="餐饮"/></span>
            <span>餐饮</span>
          </li>
          <li>
            <span className="icons"><Icon name="衣服"/></span>
            <span>服饰</span>
          </li>
          <li>
            <span className="icons"><Icon name="住房"/></span>
            <span>住房</span>
          </li>
          <li>
            <span className="icons"><Icon name="出行"/></span>
            <span>出行</span>
          </li>
          <li>
            <span className="icons"><Icon name="酒店"/></span>
            <span>酒店</span>
          </li>
          <li>
            <span className="icons"><Icon name="红包"/></span>
            <span>红包</span>
          </li>
          <li>
            <span className="icons"><Icon name="转账"/></span>
            <span>转账</span>
          </li>
          <li>
            <span className="icons"><Icon name="商店"/></span>
            <span>商店</span>
          </li>
          <li>
            <span className="icons"><Icon name="旅行"/></span>
            <span>旅行</span>
          </li>
          <li>
            <span className="icons"><Icon name="娱乐"/></span>
            <span>娱乐</span>
          </li>
          <li>
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
          </li>
          <li>
            <span className="icons"><Icon name="添加"/></span>
            <span>添加</span>
          </li>
        </ol>
      </TagsSection>
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