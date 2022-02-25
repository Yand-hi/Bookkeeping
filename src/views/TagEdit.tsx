import React from 'react'
import styled from 'styled-components'
import {useTags} from 'hooks/useTags'
import {useParams, useHistory} from 'react-router-dom'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import {Input} from 'components/Input'
import {Space} from 'components/Space'
import {Center} from 'components/Center'

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
`;
const InputWrapper = styled.div`
  padding: 0 16px;
  margin-top: 8px;
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: red;
  border-radius: 4px;
  color: white;
`;
const IconWrapper = styled.span`
  .icon {
    width: 56px;
    height: 56px;
  }

  &.editTag0 {
    > .icon {
      fill: #3eb575;
    }
  }

  &.editTag1 {
    > .icon {
      fill: #f0b73a;
    }
  }
`

type Params = {
  id: string
}
type Tag = {
  iconName: string,
  name: string,
  key: '0' | '1',
  id: number,
}
const TagEdit: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(parseInt(id))
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  const tagContent = (tag: Tag) => (
    <div>
      <Space/>
      <Space/>
      <Center>
        <IconWrapper className={'editTag' + tag.key}>
          <Icon name={tag.iconName}/>
        </IconWrapper>
      </Center>
      <InputWrapper>
        <Input label="编辑标签名:"
               type="text"
               placeholder="编辑标签名..."
               value={tag.name}
               onChange={(e) =>
                 updateTag(tag.id, {name: e.target.value})
               }/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() =>
          deleteTag(tag.id)
        }>删除标签
        </Button>
      </Center>
    </div>
  )
  return (
    <Layout>
      <TopBar>
        <Icon name="left"
              className="left"
              onClick={goBack}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
  )
}

export {TagEdit}