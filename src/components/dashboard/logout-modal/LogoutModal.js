import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LogoutModalWrapper, LogoutModalBox, LogoutModalContent, LogoutModalOverlay } from './logoutModal.styled'

const LogoutModal = () => {

  const logoutHandler = (e) => {
    e.preventDefault();
    console.log('Logout');

    navigate("/");
  }


  const navigate = useNavigate();

  return (
    <>
      <LogoutModalOverlay />
      <LogoutModalWrapper>
        <LogoutModalBox>
          <LogoutModalContent>
            <h4>Are you sure you want to log out?</h4>
            <button className='button logout' onClick={logoutHandler}>Log Out</button>
            <button className='button cancel'>Cancel</button>
          </LogoutModalContent>
        </LogoutModalBox>
      </LogoutModalWrapper>

    </>
  )
}

export default LogoutModal