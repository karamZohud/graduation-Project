"use client";
import React, { useState } from 'react'
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';

const HeaderSide = () => {
    const [closedMenu, setClosedMenu] = useState(false);

  return (
    <>
    <Navbar closedMenu={closedMenu} setClosedMenu={setClosedMenu} />
    <SideMenu closedMenu={closedMenu} setClosedMenu={setClosedMenu} />
    </>
  )
}

export default HeaderSide