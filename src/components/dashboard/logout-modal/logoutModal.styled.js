import styled from "styled-components";

export const LogoutModalBox = styled.div`
background-color: #ffffff;
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
  padding:0; 
  margin:0; 
  background-color: rgba(0, 0, 0, 0.5);  
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

