import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'

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

      &.selectedTag {
        .icons {
          background: #3eb575;

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

type Tags = {
  iconName: string,
  name: string
}

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<Tags[]>([
    {iconName: '餐饮', name: '餐饮'},
    {iconName: '衣服', name: '衣服'},
    {iconName: '住房', name: '住房'},
    {iconName: '出行', name: '出行'},
    {iconName: '酒店', name: '酒店'},
    {iconName: '红包', name: '红包'},
    {iconName: '转账', name: '转账'},
    {iconName: '商店', name: '商店'},
    {iconName: '旅行', name: '旅行'},
    {iconName: '娱乐', name: '娱乐'},
    {iconName: '其它', name: '其它'},
  ])
  const [selectedTag, setSelectedTag] = useState<Tags>()
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
  const onToggleTag = (tag: Tags) => {
    setSelectedTag(tag)
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.name}
              className={tag === selectedTag ? 'selectedTag' : ''}
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