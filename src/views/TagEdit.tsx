import React from 'react'
import styled from 'styled-components'
import {useTags} from 'hooks/useTags'
import {useParams} from 'react-router-dom'
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
type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export {TagEdit}