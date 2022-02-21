import React, {useState} from 'react'
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
  const [tags, setTags] = useState<string[]>(
    ['餐饮', '衣服', '住房', '出行', '酒店', '红包', '转账', '商店', '旅行', '娱乐', '其它', '添加']
  )
  return (
    <Wrapper>
      <Output/>
      <ol>
        {tags.map(tag =>
          <li key={tag}>
            <span className="icons"><Icon name={tag}/></span>
            <span>{tag}</span>
          </li>
        )}
      </ol>
    </Wrapper>
  )
}

export {TagsSection}