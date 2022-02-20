import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background: #f7f7f7;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      display: inline-block;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
const NotesSection = styled.section`
`;
const CategorySection = styled.section`
`;
const NumberPadSection = styled.section`
`;

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>0</div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>.</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>
  );
}
export default Money