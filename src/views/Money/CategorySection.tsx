import styled from 'styled-components'
import Icon from '../../components/Icon'
import React from 'react'

const Wrapper = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  .date {
    color: black;
    padding: 5px 10px;
    text-align: center;
    margin-right: 12px;
    border-radius: 4px;
    background: #f7f7f7;

    .icon {
      padding-top: 4px;
    }
  }

  > ul {
    display: flex;
    padding: 0 10px;
    color: #acacac;

    > li {
      padding: 5px 10px;
      text-align: center;
      font-size: 16px;
      margin-left: 12px;
      border-radius: 4px;
      background: #f7f7f7;

      &.selected {
        color: white;
        background: #3eb575;
      }
    }
  }
`;
const CategorySection = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
      <span className="date">
          2月21日
          <Icon name={"down"}/>
        </span>
    </Wrapper>
  )
}

export {CategorySection}