import styled from 'styled-components'

const CategorySection = styled.section`
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

      &.selected {
        color: white;
        background: #3eb575;
      }
    }
  }
`;

export {CategorySection}