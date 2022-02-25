import {useEffect, useState} from 'react'
import {useUpdate} from './useUpdate'

type RecordItem = {
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
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()}
    setRecords([...records, record])
  }
  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records))
  }, [records])
  return {records, addRecord}
}

export {useRecords}