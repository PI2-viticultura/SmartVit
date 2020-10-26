import React from 'react'
import * as VscIcons from 'react-icons/vsc';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: ' Indicadores',
        path: '/indicator',
        icon: <HiIcons.HiDocumentReport />,
        cName: 'nav-text'
    },
    {
        title: ' Sistemas',
        path: '/',
        icon: <VscIcons.VscGear />,
        cName: 'nav-text'
    },
    {
        title: ' Suporte',
        path: '/support',
        icon: <BiIcons.BiSupport/>,
        cName: 'nav-text'
    },
    {
        title: ' Avaliar Safra',
        path: '/',
        icon: <BsIcons.BsClipboardData />,
        cName: 'nav-text'
    },
    {
        title: ' Feedback',
        path: '/feedback',
        icon: <MdIcons.MdFeedback />,
        cName: 'nav-text'
    },
    {
        title: ' Pragas',
        path: '/pest',
        icon: <GoIcons.GoBug />,
        cName: 'nav-text'
    },
    {
        title: ' Sair',
        path: '/logout',
        icon: <BiIcons.BiExit />,
        cName: 'nav-text'
    },


]