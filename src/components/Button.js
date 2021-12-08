import React from "react";
import styled from "styled-components";

export default function Button({ children, ...restProps }) {
  return <MainButton {...restProps}>{children}</MainButton>;
}

const MainButton = styled.button`
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  padding: .9rem 2.3rem;
  text-decoration: none;
`;
