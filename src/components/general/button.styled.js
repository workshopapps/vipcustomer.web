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
export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  padding: 0.5rem;
  border: 1px solid #fffafb;
  border-radius: 8px;
`;
