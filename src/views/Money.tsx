import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Icon from '../components/Icon'

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 60px;
    text-align: right;
    padding: 0 12px;
  }

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
const NotesSection = styled.section`
  padding: 0 16px;
  font-size: 16px;

  > label {
    display: flex;
    align-items: center;

    > span {
      color: #576b95;
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 60px;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .pad {
    background: #fafafa;

    > button {
      background: white;
      font-size: 24px;
      float: left;
      width: 25%;
      height: 64px;
      border-radius: 8px;
      border: 4px solid #fafafa;

      &.ok {
        background: #9dd8b8;
        color: white;
        height: 192px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`;
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
        <span className="date">2月21日</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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
            <span className="icons"><Icon name="其它"/></span>
            <span>其它</span>
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