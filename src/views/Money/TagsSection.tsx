import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {useTags} from 'hooks/useTags'

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
    height: 26vh;
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
        margin-bottom: 4px;
        border-radius: 16px;

        .icon {
          width: 24px;
          height: 24px;
          fill: #c7c7c7;
        }
      }

      &.selectedTag0 {
        color: #3eb575;

        .icons {
          background: #3eb575;

          .icon {
            fill: white;
          }
        }
      }

      &.selectedTag1 {
        color: #f0b73a;

        .icons {
          background: #f0b73a;

          .icon {
            fill: white;
          }
        }
      }

      &.add {
        color: #576b95;
      }
    }
  }
`;

type Tag = {
  iconName: string,
  name: string,
  key: '0' | '1'
}
type Props = {
  value: Tag,
  types: '0' | '1',
  onChange: (tag: Tag) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags()
  const types = props.types
  const reduceTags = tags.filter(item => item.key === '0')
  const plusTags = tags.filter(item => item.key === '1')
  const partTags = types === '0' ? reduceTags : plusTags
  const selectedTag = props.value
  const addTag = () => {
    const tagName = window.prompt('请输入新标签名:')
    if (tagName) {
      const oldTags = tags.map(tag => tag.name)
      if (oldTags.indexOf(tagName) >= 0) {
        return window.alert('该标签已存在')
      }
      setTags([...tags, {iconName: '其它', name: tagName, key: types === '0' ? '0' : '1'}])
    }
  }
  const onToggleTag = (tag: Tag) => {
    props.onChange(tag)
  }
  return (
    <Wrapper>
      <ol>
        {partTags.map(tag =>
          <li key={tag.name}
              className={tag === selectedTag ? 'selectedTag' + `${types}` : ''}
              onClick={() => {
                onToggleTag(tag)
              }}>
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
  )
}

export {TagsSection}