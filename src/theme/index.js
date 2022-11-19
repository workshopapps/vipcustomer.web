import { createGlobalStyle } from "styled-components";

// all colors are currently temporal
const Themes = {
  light: {
    color: "#000000",
    bg: "#ffffff",
    example: "yellow"

    //.. others
  },
  dark: {
    color: "#ffffff",
    bg: "#000000",
    example: "pink"

    // others
  }
};

const GLobalStyles = createGlobalStyle`
/* style general classes here that needs theeming */
/* example */
body {
    background-color: ${({ theme }) => theme.bg};
<<<<<<< HEAD
    max-width:1605px;
=======
>>>>>>> e949d6732ae49cef7936296680eb6f9686331be4
    margin:0 auto;
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.color};
    transition:color 0.2s linear, background-color 0.2s linear;

  }

.btn{
  min-width:7rem;
  padding:7px 10px;
  border: 2px solid ${({ theme }) => theme.color};
  color:${({ theme }) => theme.color};
  transition:all 0.3s linear;
  text-transform:uppercase;
  font-size:1rem;
}

/* example */






`;

export { Themes, GLobalStyles };
