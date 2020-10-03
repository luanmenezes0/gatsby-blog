import React from "react"

import SocialLinks from "../SocialLinks"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
