import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'
import Icon from './Icon'

require('../icons/money.svg')
require('../icons/chart.svg')
require('../icons/tag.svg')

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  ul {
    display: flex;

    li {
      padding: 8px 0;
      width: 33.33333333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name={'money'}/>
          <Link to="/">记一笔</Link>
        </li>
        <li>
          <Icon name={'tag'}/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name={'chart'}/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav