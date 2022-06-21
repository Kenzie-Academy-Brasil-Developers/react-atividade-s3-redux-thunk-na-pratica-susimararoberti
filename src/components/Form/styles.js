import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  margin: 10vh;
  padding-bottom: 2rem;
  background-color: #f8154a;
  border-radius: 8px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }
`;

export const List = styled.ul`
  width: 90%;
  font-family: "Times New Roman", Times, serif;

  li {
    color: #41002d;
    list-style: none;
    text-align: initial;
    padding: 10px 5px;
    font-size: 18px;
    margin: 15px 0;
    width: 88%;
    background-color: #fdd7f4;
    border-radius: 8px;
  }
`;

export const Box = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 2vh;
  font-family: Arial, Helvetica, sans-serif;

  input {
    height: 30px;
    width: 60%;
    border-radius: 8px;
    border: none;
    padding-left: 10px;
    color: #a80228;
    font-size: 14px;
  }

  button {
    width: 30%;
    border: none;
    border-radius: 8px;
    background-color: #fff;
    font-size: 12px;
    font-weight: 600;
    color: #a80228;
  }
`;
