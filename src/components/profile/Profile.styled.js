import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const ProfileWrap = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: flex;
    margin-bottom: 10px;
    border-radius: 50%;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: medium;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  width: 100%;
  background-color: rgb(218, 239, 239);

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(255, 255, 255);
  }
`;
