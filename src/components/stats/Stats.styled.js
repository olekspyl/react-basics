import styled from 'styled-components';

export const Stats = styled.section`
  h2 {
    color: rgb(106, 106, 110);
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    justify-content: space-evenly;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }
`;

export const Data = styled.li`
  background-color: ${props => props.$getrandomhexcolor};
`;
