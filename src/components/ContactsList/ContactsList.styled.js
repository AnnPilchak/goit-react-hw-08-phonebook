import { styled } from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
margin-left: 10px;
`

const EmptyContacts = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { List, Item, Button, EmptyContacts };