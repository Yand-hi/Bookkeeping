import React from 'react'
import {Link} from 'react-router-dom';
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

  p {
    margin: 20px auto 10px;
    color: #acacac;
  }

  div {
    margin: 20px auto 10px;
    color: lightslategray;
  }

  > ol {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 25%;
      font-size: 14px;
      color: black;
      margin: 10px 0 6px;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icons {
        background: white;
        margin-bottom: 6px;
        border-radius: 20px;

        .icon {
          width: 40px;
          height: 40px;
          fill: #3eb575;
        }
      }

      &.add {
        color: #576b95;
      }
    }

    &.plus {
      > li {
        .icon {
          fill: #f0b73a;
        }
      }
    }
  }
`;

const Tags = () => {
  const {tags, addTag} = useTags()
  const reduceTags = tags.filter(item => item.key === '0')
  const plusTags = tags.filter(item => item.key === '1')
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>管理标签</h1>
        </div>
        <p>支出标签</p>
        <ol>
          {reduceTags.map(tag =>
            <li key={tag.name}>
              <Link to={'/tags/' + tag.id}>
                <span className="icons"><Icon name={tag.iconName}/></span>
                <span>{tag.name}</span>
              </Link>
            </li>
          )}
          <li className="add">
            <span className="icons" onClick={() => addTag('0')}><Icon name="添加"/></span>
            <span>添加</span>
          </li>
        </ol>
        <p>收入标签</p>
        <ol className="plus">
          {plusTags.map(tag =>
            <li key={tag.name}>
              <Link to={'/tags/' + tag.id}>
                <span className="icons"><Icon name={tag.iconName}/></span>
                <span>{tag.name}</span>
              </Link>
            </li>
          )}
          <li className="add">
            <span className="icons" onClick={() => addTag('1')}><Icon name="添加"/></span>
            <span>添加</span>
          </li>
        </ol>
      </Wrapper>
    </Layout>
  )
}

export default Tags