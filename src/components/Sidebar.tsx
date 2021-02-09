import * as React from 'react';
import { GuildIcon, IconStyle, SidebarContent, SidebarHeader, SidebarStyle } from '../utils/styles';
import {History} from 'history';
import { Guild } from "../utils/types";
import { GuildContext } from '../utils/Contexts/GuildContext';
type SidebarProps = {
    guilds: Guild[];
    history: History;
};


export const Sidebar = (props: SidebarProps) => {
    const {guild, setGuild } = React.useContext(GuildContext)
    console.log(guild, setGuild)
        return(
        <SidebarStyle>
            <SidebarHeader>
                <IconStyle />
            </SidebarHeader>
            <SidebarContent>
               {props.guilds.map((guild) => (
               <GuildIcon key = {guild.id}  onClick={() => {
                   setGuild(guild);
                   props.history.push(`/dashboard/${guild.id}`)
               }}/>))};
            </SidebarContent>
        </SidebarStyle>
        );

    };