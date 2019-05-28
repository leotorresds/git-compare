import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;

`;
export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      margin-top: 10px;
      font-size: 24px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
      background: #f5f5f5;
    }
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  button {
    padding: 0 20px;
    height: 45px;
    width: 60px;
    margin-left: 10px;
    margin-bottom: 15px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
  .btn-refresh {
    background: #00F;
  }

  .btn-delete {
    background: #f00;
  }
`;
