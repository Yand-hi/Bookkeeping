import React from 'react'
import Layout from 'components/Layout'
import {useTags} from 'hooks/useTags'
import Icon from 'components/Icon'
import styled from 'styled-components'


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
    height: 25vh;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;

    > li {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: black;
      margin: 10px 0;

      .icons {
        background: #3eb575;
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 15px;

        .icon {
          width: 24px;
          height: 24px;
          fill: white;
        }
      }

      &.add {
        color: #576b95;
      }
    }
  }
`;
const Tags = () => {
  const {tags, setTags} = useTags()
  const addTag = () => {
    const tagName = window.prompt('请输入新标签名:')
    if (tagName) {
      const oldTags = tags.map(tag => tag.name)
      if (oldTags.indexOf(tagName) >= 0) {
        return window.alert('该标签已存在')
      }
      setTags([...tags, {iconName: '其它', name: tagName}])
    }
  }
  return (
    <Layout>
      <Wrapper>
        <ol>
          {tags.map(tag =>
            <li key={tag.name}>
              <span className="icons"><Icon name={tag.iconName}/></span>
              <span>{tag.name}</span>
            </li>
          )}
          <li className="add">
            <span className="icons" onClick={addTag}><Icon name="添加"/></span>
            <span>添加</span>
          </li>
        </ol>
      </Wrapper>
    </Layout>
  )
}
export default Tags