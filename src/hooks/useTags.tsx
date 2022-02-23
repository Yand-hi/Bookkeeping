import {useState} from 'react'

type Tag = {
  iconName: string,
  name: string,
  id: '0' | '1'
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([
    {iconName: '餐饮', name: '餐饮', id: '0'},
    {iconName: '衣服', name: '衣服', id: '0'},
    {iconName: '住房', name: '住房', id: '0'},
    {iconName: '出行', name: '出行', id: '0'},
    {iconName: '酒店', name: '酒店', id: '0'},
    {iconName: '红包', name: '红包', id: '0'},
    {iconName: '转账', name: '转账', id: '0'},
    {iconName: '商店', name: '商店', id: '0'},
    {iconName: '旅行', name: '旅行', id: '0'},
    {iconName: '娱乐', name: '娱乐', id: '0'},
    {iconName: '工资', name: '工资', id: '1'},
    {iconName: '奖金', name: '奖金', id: '1'},
    {iconName: '基金', name: '基金', id: '1'},
    {iconName: '股票', name: '股票', id: '1'},
    {iconName: '回款', name: '回款', id: '1'},
    {iconName: '兼职', name: '兼职', id: '1'},
    {iconName: '收红包', name: '收红包', id: '1'},
    {iconName: '收转账', name: '收转账', id: '1'},
    {iconName: '利息', name: '利息', id: '1'},
    {iconName: '其它', name: '其它', id: '1'},
  ])
  return {tags, setTags}
}

export {useTags}