import {
  FaRegKeyboard,
  FaRegSun,
  FaCode,
  FaRegPaperPlane,
  FaFacebook,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { MdOutlineFontDownload } from 'react-icons/md'
import { BsQuestionCircle } from 'react-icons/bs'
import { RiUserLine } from 'react-icons/ri'
import { AiOutlinePound } from 'react-icons/ai'
import { PiSignInBold } from 'react-icons/pi'
import React from "react";
import languages from "./languages";

export const MENU_ITEMS_1 = [
  {
    title: "English",
    icon: <MdOutlineFontDownload />,
    children: {
      title: "Language",
      data: languages,
    },
  },
  { title: "Feedback and help", icon: <BsQuestionCircle />, to: '/feedback' },
  { title: "Keyboard shortcuts", icon: <FaRegKeyboard /> },
];

export const MENU_ITEMS_2 = [
  { title: "View profile", icon: <RiUserLine />, to: /* config.routesPublic.profileLink(user.nickname) */ '/'},
  { title: "Get coins", icon: <AiOutlinePound /> },
  { title: "Settings", icon: <FaRegSun /> },
  ...MENU_ITEMS_1,
  { title: "Log out", icon: <PiSignInBold />, to: "/logout", separate: true },
];

export const MENU_ITEMS_SHARE = [
  { title: "Embed", icon: <FaCode style={{color: `gray`}} /> },
  { title: "Send to friends", icon: <FaRegPaperPlane style={{color:'red'}} /> },
  { title: "Share to Facebook", icon: <FaFacebook  style={{color:'blue'}}/> },
  { title: "Share to Instagram", icon: <FaInstagram style={{color:'pink'}} /> },
  { title: "Copy link", icon: <FaLink style={{color:'red'}} /> },
];
