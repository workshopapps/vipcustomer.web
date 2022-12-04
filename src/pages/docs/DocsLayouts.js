import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import DocsNav from "components/docs/DocsNav";
import DocsSidebar from 'components/docs/DocsSidebar';
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