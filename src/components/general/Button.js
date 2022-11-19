import styled from "styled-components";

/*
This is a reusable Button Component 

Button component takes in props


@PROPS TYPE - STRINGS

 fw - font-weight, 
 fz - font-size, 
 bg - background, 
 fw - font-weight,
 padding - padding - (sides),
 border - border -(width,weight,color),
 height - height,
 width  - width
*/
export const Button = styled.button`
  display: flex;
  align-iems: center;
  justify-content: center;
  gap: 8px;
  font-weight: ${({ fw }) => fw || "inherit"};
  font-size: ${({ fz }) => fz || "inherit"};
  color: ${({ color }) => color || "inherit"};
  background: ${({ bg }) => bg || "transparent"};
  padding: ${({ padding }) => padding || ".5rem"};
  border: ${({ border }) => border};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius || "8px"};
`;
