import {useState} from 'react'
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
  {iconName: '兼职', name: '兼职', key: '1', id: createId()},
  {iconName: '收红包', name: '收红包', key: '1', id: createId()},
  {iconName: '收转账', name: '收转账', key: '1', id: createId()},
  {iconName: '利息', name: '利息', key: '1', id: createId()},
  {iconName: '其它', name: '其它', key: '1', id: createId()},
]
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>(defaultTags)
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  const findIndex = (id: number) => {
    //  防止错误修改
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id: number, obj: { name: string }) => {
    // 获取修改的 tag 的下标
    const index = findIndex(id)
    // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags))
    // 删掉 tagsClone 的第 index 项，换成新的对象
    const iconName = tagsClone[index].iconName
    const key = tagsClone[index].key
    tagsClone.splice(index, 1, {iconName, name: obj.name, key, id});
    setTags(tagsClone)
  }
  const deleteTag = (id: number) => {
    const index = findIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index, 1);
    setTags(tagsClone)
  }
  return {tags, setTags, findTag, updateTag, deleteTag, findIndex}
}

export {useTags}