import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  ul {
    display: flex;

    li {
      padding: 16px;
      width: 33.33333333%;
      text-align: center;
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">记一笔</Link>
        </li>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav