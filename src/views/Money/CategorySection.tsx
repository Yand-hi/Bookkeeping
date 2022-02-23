import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'

const Wrapper = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  .date {
    color: black;
    padding: 5px 10px;
    text-align: center;
    margin-right: 12px;
    border-radius: 4px;
    background: #f7f7f7;

    .icon {
      padding-top: 4px;
    }
  }

  > ul {
    display: flex;
    padding: 0 10px;
    color: #acacac;

    > li {
      padding: 5px 10px;
      text-align: center;
      font-size: 16px;
      margin-left: 12px;
      border-radius: 4px;
      background: #f7f7f7;

      &.selected0 {
        color: white;
        background: #3eb575;
      }

      &.selected1 {
        color: white;
        background: #f0b73a;
      }
    }
  }
`;

type Category = '0' | '1'
type Props = {
  value: Category,
  onChange: (category: Category) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'0': '支出', '1': '收入'}
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['0', '1'])
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(item =>
          <li key={item}
              className={
                category === item ? "selected" + `${item}` : ''
              }
              onClick={() => {
                props.onChange(item)
              }}>
            {categoryMap[item]}
          </li>
        )}
      </ul>
      <span className="date">
          2月21日
          <Icon name={"down"}/>
        </span>
    </Wrapper>
  )
}

export {CategorySection}