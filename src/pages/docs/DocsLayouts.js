import React from 'react'
import { Outlet } from "react-router-dom";
import DocsOverview from 'components/docs/DocsOverview';
import "./style.css";


const DocsLayouts = () => {
  return (
    <div className='layouts-div'>
      <div>
        <DocsOverview />
      </div>
        <div className='docs-main'>
          <Outlet />
      </div>
    </div>
  )
}

export default DocsLayouts