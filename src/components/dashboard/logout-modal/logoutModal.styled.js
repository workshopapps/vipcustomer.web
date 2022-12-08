import styled from "styled-components";

export const LogoutModalWrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
`

export const LogoutModalBox = styled.div`
position: absolute;
background-color: #ffffff;
top: 25%;
left: 15%;
width: 70%;
height: fit-content;
`

export const LogoutModalContent = styled.div`
font-size: 2rem;
font-weight: 500;
line-height: 42px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 30px 30px;

.button {
  padding: 10px 115px;
  background-color: var(--color-darkBlue);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.5rem;
line-height: 24px;
}

.logout {
  margin: 20px 0;
}

.cancel {
  background: transparent;
  color: var(--color-darkBlue);
  border: 1px solid var(--color-darkBlue);
  border-radius: 8px;
}

@media screen and (max-width: 600px) {
  font-size: 1.2rem;
  line-height: 20px;
  .button {
    padding: 8.5px 26px;
    font-size: 14px;
    line-height: 23px;
  }

  .close__btn {
    display: none;
  }
}
`

export const LogoutModalOverlay = styled.div`
position:fixed; 
  top:0px; 
  bottom:0px; 
  left:0px; 
  right:0px; 
  overflow:hidden; 
  padding:0; 
  margin:0; 
  background-color:#000;  
  filter:alpha(opacity=50); 
  opacity:0.5; 
  z-index:-1;

 
`

