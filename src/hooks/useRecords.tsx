import { useEffect, useState } from 'react'
import { useUpdate } from './useUpdate'

export type RecordItem = {
  category: '0' | '1',
  tagId: number[],
  note: string,
  amount: number
  createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('record') || '[]'))
  }, [])
  const addRecord = (newRecord: newRecordItem) => {
    //  TODO
    if (newRecord.amount === 0) {
      alert('输入金额需大于0')
      return false
    }
    if (newRecord.tagId.length === 0) {
      alert('请至少选择一个标签')
      return false
    }
    const record = { ...newRecord, createdAt: (new Date()).toISOString() }
    setRecords([...records, record])
    return true
  }
  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records))
  }, [records])
  return { records, addRecord }
}

export { useRecords }