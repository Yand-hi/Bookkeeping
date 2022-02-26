import { useState } from 'react'
import Layout from '../components/Layout'
import { CategorySection } from './Money/CategorySection'
import { useRecords } from 'hooks/useRecords'
import { useTags } from 'hooks/useTags'
import Icon from 'components/Icon'
import day from 'dayjs'

const Statistics = () => {
  const [category, setCategory] = useState<'0' | '1'>('0')
  const { getName } = useTags()
  const { records } = useRecords()
  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => setCategory(value)} />
      <div>
        {records.map(r => {
          return <div>
            <span>
              <Icon name={getName(r.tagId[0])[0]} />
            </span>
            <ul>
              <li>{getName(r.tagId[0])[1]}</li>
              <li>-{r.amount}元</li>
              <li>{r.note}</li>
              <li>{day(r.createdAt).format('YYYY年MM月DD日')}</li>
            </ul>
          </div>
        })}
      </div>
    </Layout>
  )
}
export default Statistics