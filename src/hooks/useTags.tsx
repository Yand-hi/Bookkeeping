import {useEffect, useRef, useState} from 'react'
import {createId} from 'lib/createId'

type Tag = {
  iconName: string,
  name: string,
  key: '0' | '1',
  id: number,
}
const defaultTags: Tag[] = [
  {iconName: '餐饮', name: '餐饮', key: '0', id: createId()},
  {iconName: '衣服', name: '衣服', key: '0', id: createId()},
  {iconName: '住房', name: '住房', key: '0', id: createId()},
  {iconName: '出行', name: '出行', key: '0', id: createId()},
  {iconName: '酒店', name: '酒店', key: '0', id: createId()},
  {iconName: '红包', name: '红包', key: '0', id: createId()},
  {iconName: '转账', name: '转账', key: '0', id: createId()},
  {iconName: '商店', name: '商店', key: '0', id: createId()},
  {iconName: '旅行', name: '旅行', key: '0', id: createId()},
  {iconName: '娱乐', name: '娱乐', key: '0', id: createId()},
  {iconName: '工资', name: '工资', key: '1', id: createId()},
  {iconName: '奖金', name: '奖金', key: '1', id: createId()},
  {iconName: '基金', name: '基金', key: '1', id: createId()},
  {iconName: '股票', name: '股票', key: '1', id: createId()},
  {iconName: '回款', name: '回款', key: '1', id: createId()},
  {iconName: '收红包', name: '收红包', key: '1', id: createId()},
  {iconName: '收转账', name: '收转账', key: '1', id: createId()},
  {iconName: '兼职', name: '兼职', key: '1', id: createId()},
  {iconName: '利息', name: '利息', key: '1', id: createId()},
  {iconName: '其它', name: '其它', key: '1', id: createId()},
]

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
  }, [])
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  })
  useEffect(() => {
    if (count.current > 1) {
      window.localStorage.setItem('tags', JSON.stringify(tags))
    }
  }, [tags])

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]

  const findIndex = (id: number) => {
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        result = i
        break
      }
    }
    return result
  }

  const updateTag = (id: number, {name}: { name: string }) => {
    const index = findIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    const iconName = tagsClone[index].iconName
    const key = tagsClone[index].key
    tagsClone.splice(index, 1, {iconName, name, key, id});
    setTags(tagsClone)
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag = (key: '0' | '1') => {
    const tagName = window.prompt('请输入新标签名:')
    if (tagName) {
      const oldTags = tags.map(tag => tag.name)
      if (oldTags.indexOf(tagName) >= 0) {
        return window.alert('该标签已存在')
      }
      setTags([...tags, {iconName: '其它', name: tagName, key, id: createId()}])
    }
  }

  return {tags, setTags, findTag, updateTag, deleteTag, findIndex, addTag}
}

export {useTags}