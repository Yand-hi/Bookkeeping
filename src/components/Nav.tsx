import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  ul {
    display: flex;

    li {
      width: 33.33333333%;
      text-align: center;

      a {
        padding: 8px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }

        &.selected {
          color: #002af7;

          .icon {
            fill: #002af7;
          }
        }
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav