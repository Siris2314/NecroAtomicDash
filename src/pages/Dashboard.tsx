import * as React from 'react';
import { Dropdown } from '../components/Dropdown';
import { selectMenuItems } from '../utils/constants';
import { GuildContext } from '../utils/Contexts/GuildContext';
import { GuildStoreContext } from '../utils/Contexts/GuildStoreContext';
import { BasePageStyle, DashboardContent, DashboardHeader} from '../utils/styles';

export const DashboardPage = (props: any) => {
  const{guildId} = props.match.params;
  const{guild, setGuild} = React.useContext(GuildContext);
  const {guilds} = React.useContext(GuildStoreContext);
  React.useEffect(() => {
    const findGuild = guilds.find((g) => g.id === guildId);
    setGuild(findGuild);

  });
  if(!guild) return <BasePageStyle>
  <DashboardHeader>
    Please Select a Guild
  </DashboardHeader>
  
  </BasePageStyle>
  return (
  <BasePageStyle>
     <DashboardHeader>Dashboard</DashboardHeader>
     <DashboardContent>
       <Dropdown title = "Update Default Role" items={selectMenuItems}></Dropdown>
     </DashboardContent>
   </BasePageStyle>
  )
  };