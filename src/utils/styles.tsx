import styled, { css } from 'styled-components'


export const SidebarStyle = styled.div`
  width: 100px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
  position: fixed;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;





export const MenuStyle = styled(SidebarStyle)`
  width: 300px;
  background-color: ${({theme}) => theme.base.menu}
  color: ${({theme}) => theme.text.main}
  height: 100%
  box-sizing: border-box;
  position:fixed;
  margin-left: 100px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;


export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const SidebarHeader = styled(BaseHeader)`
    justify-content: center;

`;

export const DashboardHeader = styled(BaseHeader)`
    padding: 25px;

`;


export const IconStyle = styled.div`
  height: 55px;
  width: 55px;
  background-color: grey;
  border-radius: 50px;
`;
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.content};
`;



export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
  position: fixed;
  z-index: 10;
  background-color: inherit;
  width: 100%
`;
export const BasePageStyle = styled.div`

min-height: 100%;
background-color: ${({ theme }) => theme.base.content};
color: ${({ theme }) => theme.text.main};
font-family: "Poppins";
box-sizing: border-box;
position: fixed;
margin-left: 400px;
width: 100%;
`;

export const GuildIcon = styled(IconStyle)`
  height: 60px;
  width: 60px;
  margin: 5px 0px;
`;

export const MenuContent = styled.div`
  box-sizing: border-box;
  padding: ${({theme}) => theme.padding.content};
  margin-top: 100px;
`;

export const MenuCategory = styled.div`

  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  :nth-child(2) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 20px;
  }


`;

export const MenuCategoryItem = styled.div`
  font-size: 22px;
  font-weight: lighter;
  padding: 5px 0px;
  transition: 100ms background-color;
  :hover{
    cursor: pointer;
    background-color: #42494c;
  }

`;

export const DashboardContent = styled.div`
  padding: 20px;

`;

export const DropdownHeader = styled.div`

background-color = #21262d;
padding: 8px 20px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;



`;

export const DropdownItemContainer = styled.div<any>`

  max-height = 0px;
  overflow-y: scroll;
  opacity: 0;
  transition: 300ms
  ${(props) => props.expanded ? css`
  max-height: 220px;
  opacity: 1px;
 ` : css `
        max-height: 0;
        opacity: 0;
          `}


`;

export const DropdownItem = styled.div<any>`
  background-color: #21262d;
  color: white;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 5px 20px;
  :hove {
    background-color: #545d6b;
    cursor: pointer;
  }
  ${(props) => props.isSelected && css`
      background-color: $2e2e2e;
  `};

`;