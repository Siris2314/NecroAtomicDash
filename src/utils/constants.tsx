import {MenuGroup, MenuItem} from "./types";

export const menuItems = (guildId: string): MenuGroup[] => [
    {
        name: "Security",
        path:"/security",
        routes: [
            {
                name: "Authentication",
                path:`/dashboard/${guildId}/security/authentication`,
            },
            {
                name:"Roles",
                path:`/dashboard/${guildId}/security/roles`,

            }
        ],
    },

    {
        name:"General",
        path:"/general",
        routes: [
            {
                name: "General",
                path:`/dashboard/${guildId}/general`,

            },
           
        ],
    },
    {
        name:"Micellaneous",
        path: "/micellaneous",
        routes: [
            {
                name: "Commands",
                path:`/dashboard/${guildId}/micellaneous/fun-commands`
            },
            {
                name:"Levels",
                path:`/dashboard/${guildId}/micellaneous/levels`
            },
        ],

    },

];


export const selectMenuItems: MenuItem[] = [
    { name: "Developer", value: "developer" },
    { name: "Moderator", value: "moderator" },
    { name: "Guest", value: "guest" },
    { name: "React", value: "react" },
    { name: "Angular", value: "angular" },
    { name: "Node", value: "node" },
    { name: "Java", value: "java" },
  ];