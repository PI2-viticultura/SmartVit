import React from 'react'
import { VscGear } from 'react-icons/vsc';
import { BiSupport } from 'react-icons/bi';
import { BiExit } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { HiDocumentReport } from 'react-icons/hi';
import { GoBug } from 'react-icons/go';

export const SidebarData = [
    {
        title: ' Indicadores',
        path: '/',
        icon: <HiDocumentReport />,
        cName: 'nav-text'
    },
    {
        title: ' Sistemas',
        path: '/',
        icon: <VscGear />,
        cName: 'nav-text'
    },
    {
        title: ' Suporte',
        path: '/support',
        icon: <BiSupport/>,
        cName: 'nav-text'
    },
    {
        title: ' Avaliar Safra',
        path: '/',
        icon: <BsClipboardData />,
        cName: 'nav-text'
    },
    {
        title: ' Feedback',
        path: '/feedback',
        icon: <MdFeedback />,
        cName: 'nav-text'
    },
    {
        title: ' Pragas',
        path: '/',
        icon: <GoBug />,
        cName: 'nav-text'
    },
    {
        title: ' Sair',
        path: '/',
        icon: <BiExit />,
        cName: 'nav-text'
    },


]