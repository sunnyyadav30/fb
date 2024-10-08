import React from 'react'
import './Sidebar.scss'
import SidebarRow from '../SidebarRow/SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
    const [{user}, dipatch] = useStateValue();
    return <div className="sidebar__row">
                <SidebarRow src={user.photoURL} title={user.displayName} />
                <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
                <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
                <SidebarRow Icon={PeopleIcon} title="Friends" />
                <SidebarRow Icon={ChatIcon} title="Messanger" />
                <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
                <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
                <SidebarRow Icon={ExpandMoreOutlined} />
            </div>
}

export default Sidebar