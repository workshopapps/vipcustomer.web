import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import DocsNav from "components/docs/DocsNav";
import DocsSidebar from 'components/docs/DocsSidebar';
import "./style.css";


const DocsLayouts = () => {
  return (
    <div>
      <div>
        <DocsNav />
      </div>
      <div className='docs-main'>
        <div>
          <DocsSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DocsLayouts