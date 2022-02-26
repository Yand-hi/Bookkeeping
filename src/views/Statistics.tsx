import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { CategorySection } from './Money/CategorySection'
import { RecordItem, useRecords } from 'hooks/useRecords'
import { useTags } from 'hooks/useTags'
import Icon from 'components/Icon'
import day from 'dayjs'

const Wrapper = styled.div`
  overflow: scroll;
  .recordWrapper{
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 16px 10px;
    .icons0{
      width: 40px;
      height: 40px;
      padding: 2px;
      border-radius: 50%;
      .icon{
        width: 36px;
        height: 36px;
        fill: #3eb575;
      }
    }
    .icons1{
      width: 40px;
      height: 40px;
      padding: 2px;
      border-radius: 50%;
      .icon{
        width: 36px;
        height: 36px;
        fill: #f0b73a;
      }
    }
    .record{
      flex: 1;
      padding: 10px;
      border-bottom: 1px solid #e5e5e5;
      .tag-amount{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
        .amount{
          font-weight: 500;
          font-size: 20px;
          font-family: 'Times New Roman', Times, serif;
        }
      }
      .date-note{
        color: #b2b2b2;
        font-size: 14px;
      }
    }
  }
`
const Header = styled.p`
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  line-height: 20px;
  padding: 24px 22px 0;
`
const Statistics: React.FC = () => {
  const [category, setCategory] = useState<'0' | '1'>('0')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.map(r => {
    const key = day(r.createdAt).format('MM/DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <CategorySection value={category}
        onChange={value => setCategory(value)} />
      <Wrapper>
        {array.map(([date, records]) => <div>
          <Header>
            {date}
          </Header>
          {records.map(r => {
            return <div className='recordWrapper'>
              <span className={'icons' + r.category}>
                <Icon name={getName(r.tagId[0])[0]} />
              </span>
              <ul className='record'>
                <li className='tag-amount'>
                  <span>{getName(r.tagId[0])[1]}</span>
                  <span className='amount'>{r.category === '0' ? '-' : '+'}{r.amount}</span>
                </li>
                <li className='date-note'>
                  <span>{day(r.createdAt).format('HH:mm')} </span>
                  |
                  <span> {r.note}</span>
                </li>
              </ul>
            </div>;
          })}
        </div>)}
      </Wrapper>
    </Layout>
  )
}

export default Statistics