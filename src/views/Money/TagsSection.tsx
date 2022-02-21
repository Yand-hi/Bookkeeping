import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import {Output} from './Output'

const Wrapper = styled.section`
  background: white;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    width: 100%;
    max-height: 25vh;
    display: flex;
    border-top: 1px solid #e5e5e5;
    flex-wrap: wrap;
    overflow: scroll;

    > li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: #7f7f7f;
      margin: 10px 0;

      .icons {
        background: #f7f7f7;
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 15px;

        .icon {
          width: 24px;
          height: 24px;
          fill: #c7c7c7;
        }
      }
    }
  }
`;

const TagsSection: React.FC = () => {
  return (
    <Wrapper>
      <Output/>
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
    </Wrapper>
  )
}

export {TagsSection}