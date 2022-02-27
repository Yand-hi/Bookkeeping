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
    max-height: 220px;
    display: flex;
    border-top: 1px solid #e5e5e5;
    flex-wrap: wrap;
    overflow: auto;

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

type Props = {
  value: number[],
  types: '0' | '1',
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags()
  const types = props.types
  const reduceTags = tags.filter(item => item.key === '0')
  const plusTags = tags.filter(item => item.key === '1')
  const partTags = types === '0' ? reduceTags : plusTags
  const selectedTagId = props.value
  const onToggleTag = (tagId: number) => {
    props.onChange([tagId])
  }
  return (
    <Wrapper>
      <ol>
        {partTags.map(tag =>
          <li key={tag.name}
              className={tag.id === selectedTagId[0] ? 'selectedTag' + `${types}` : ''}
              onClick={() => {
                onToggleTag(tag.id)
              }}>
            <span className="icons"><Icon name={tag.iconName}/></span>
            <span>{tag.name}</span>
          </li>
        )}
        <li className="add">
          <span className="icons" onClick={() => addTag(types)}><Icon name="添加"/></span>
          <span>添加</span>
        </li>
      </ol>
    </Wrapper>
  )
}

export {TagsSection}