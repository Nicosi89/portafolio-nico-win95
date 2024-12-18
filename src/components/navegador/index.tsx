import type { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Select, Separator, Window } from "react95";
import { getImagesUrl } from "../../utility/get-cdn-url";
import { useGo } from "@refinedev/core";
import { AppLayoutHeader, AppLayoutMenu } from "../layout/90s-app/app-layout";

type Props = {
    title?: ReactNode;
    isLoading?: boolean;
    containerStyle?: React.CSSProperties;
    address?: string;
    onClose?: () => void;
};

export const Navegador = ({
    title,
    containerStyle,
    address,
    onClose,
    children,
}: PropsWithChildren<Props>) => {

    const go = useGo();


    return (
        <Container style={containerStyle}>
            <AppLayoutHeader title={title} onClose={onClose} />
            <AppLayoutMenu
                menu={[
                    { label: "File", children: [] },
                    { label: "Edit", children: [] },
                    { label: "View", children: [] },
                    { label: "Favorites", children: [] },
                    {
                        label: "About", children: [
                            {
                                label: "About",
                                onClick: () =>
                                    go({
                                        hash: "about",
                                        type: "replace",
                                        options: { keepHash: false, keepQuery: true },
                                        to: "",
                                    }),
                            },
                        ]
                    },
                ]}
            />
            <AppBar>
                <AppBarContainer>
                    <IconosyAddress >
                        <ImageIconsWraper>
                            <ImageBrowserIcons
                                src={getImagesUrl("/browser-icons.png")}
                                alt="browser icons"
                            />

                        </ImageIconsWraper>
                        <Separator />
                        <AddressBarContainer>
                            <AddressText>Address:</AddressText>
                            <Select
                                width="90%"
                                value={address}
                                options={[
                                    {
                                        label: address,
                                        value: address,
                                    },
                                ]}
                            />
                        </AddressBarContainer>
                    </IconosyAddress>
                    <Win95LogoContainer>
                        <Win95Logo src={getImagesUrl("/win95-logo.png")} alt="win95 logo" />
                    </Win95LogoContainer>
                </AppBarContainer>
            </AppBar>
            <WindowContent>{children}</WindowContent>
        </Container>
    );
};

const Container = styled(Window)`
  width: 100%;
`;

const WindowContent = styled.div`
  /* height: calc(100dvh - 250px); */
  overflow: auto;

  @media(max-width: 450px) {
    ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */    
  }  

`;

const AppBar = styled.div`
  display: flex;
  width: 100%;
  /* height: 120px; */
  justify-content: space-between;
`;

const AppBarContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

const ImageIconsWraper = styled.div`
    display: flex;
    
`;

const AddressBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 4px;
  overflow: hidden;

 @media(max-width: 450px) {
    width: 293px;
    
  }  
  
`;

const IconosyAddress = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AddressText = styled.div`
  width: 80px;
  padding-left: 8px;
`;

const ImageBrowserIcons = styled.img`
  width: 678px;
  height: 44px;
  padding: 8px 16px;
  

  @media(max-width: 450px) {
    display: none;
  } 
`;

const Win95LogoContainer = styled.div`
  width: 110px;
  height: 110px;
  border: 2px solid ;
  border-top-color: #707070;
  border-left-color: #707070;
  border-right-color: #D9D9D9;
  border-bottom-color: #D9D9D9;

   @media(max-width: 450px) {

  height: 50px;
    width: 50px;

  }
`;

const Win95Logo = styled.img`
   width: 106px;
  height: 106px;
  border: 2px solid ;
  border-top-color: black;
  border-left-color: black;
  border-right-color: white;
  border-bottom-color: white;

  @media(max-width: 450px) {

  height: 50px;
  width: 50px;
  }
`;