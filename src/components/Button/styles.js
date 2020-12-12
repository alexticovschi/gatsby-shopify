import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sabs', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  border: 1px solid black;
  white-space: nowrap;
  width: 100%;

  &:hover:not(:disabled) {
    cursor: pointer;
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
