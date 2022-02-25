import {useEffect, useState} from 'react'
import {useUpdate} from './useUpdate'

type RecordItem = {
  category: '0' | '1',
  tagId: number[],
  note: string,
  amount: number
}

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
  }
  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records))
  }, [records])
  return {records, addRecord}
}

export {useRecords}