import {useState} from 'react'

type Tag = {
  iconName: string,
  name: string
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([
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
  return {tags, setTags}
}

export {useTags}