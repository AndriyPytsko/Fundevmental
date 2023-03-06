import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
  background-color: #e4f0f5;
  margin: 10px auto;
  th,
  td {
    border: 1px solid rgb(200, 200, 200);
    width: 200px;
  }
`;

export const Th = styled.th`
  background-color: #3f87a6;
  color: #fff;
  padding: 5px;
`;

export const Container = styled.div`
  margin: 50px auto;
  width: fit-content;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
