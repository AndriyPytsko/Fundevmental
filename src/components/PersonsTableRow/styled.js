import styled from "styled-components";
import { Button } from "../../styles/globalStyles";

export const DeleteButton = styled(Button)`
  background: #f44336;
  width: 50%;
`;
export const EditButton = styled(Button)`
  width: 50%;
`;
export const SaveButton = styled(Button)`
  background: #4caf50;
  width: 50%;
`;
export const CancelButton = styled(Button)`
  width: 50%;
`;
export const Input = styled.input`
  border: none;
  background: ${(props) => (props.readOnly ? "transparent" : "white")};
  width: 100%;
  height: 100%;
  outline: none;
  box-sizing: border-box;
`;
