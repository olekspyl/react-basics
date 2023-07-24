import styled from 'styled-components';

export const FriendsList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const FriendItem = styled.li`
  padding: 10px;

  /* &:not(:last-child) {
    margin-bottom: 15px;
  } */

  &::marker {
    color: ${props => {
      return props.$isonline ? 'green' : 'red';
    }};
    font-size: 1.5em;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
