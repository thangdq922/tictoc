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
  { title: "View profile", icon: <RiUserLine />, type: 'toProfile' },
  { title: "Get coins", icon: <AiOutlinePound /> },
  { title: "Settings", icon: <FaRegSun />, type: 'setting' },
  ...MENU_ITEMS_1,
  { title: "Log out", icon: <PiSignInBold />, type: 'logout', separate: true },
];

export const MENU_ITEMS_SHARE = [
  { title: "Embed", icon: <FaCode fill="rgb(22, 24, 35)" fillOpacity={0.75} size={19} /> },
  { title: "Send to friends", icon: <FaRegPaperPlane fill="rgb(254, 44, 85)" size={19} /> },
  { title: "Share to Facebook", icon: <FaFacebook fill="rgb(0, 117, 250)" size={19} /> },
  { title: "Share to Instagram", icon: <FaInstagram style={{ color: 'pink' }} size={19} /> },
  { title: "Copy link", icon: <FaLink style={{ color: 'rgb(254, 44, 85)' }} size={19} /> },
];
