import { useEffect, useState } from "react";
import { User } from '@supabase/supabase-js';
import { useNavigate, useParams } from "react-router-dom";
import {
  Authenticated,
  type HttpError,
  useCreate,
  useList,
  useNavigation,
  useShow,
} from "@refinedev/core";
import dayjs from "dayjs";
import {
  Anchor,
  NumberInput,
  Button,
  TextInput,
  GroupBox,
} from "react95";
import styled from "styled-components";


import { Pelicula, Voto } from "../../../types";
import { LayoutSubPagePelisApp } from "../../../components/layout/90s-app";
import { supabaseClient } from "../../../supabase-client";
import { getImagesUrl } from "../../../utility/get-cdn-url";
import { ImagePixelated } from "../../../components/image-pixelated";
import { CatchAllNavigate } from "@refinedev/react-router-v6";

export const PelisAppPageVoto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useNavigation();
  const [user, setUser] = useState<User | null>(null);
  const [isVotar, setIsVotar] = useState<boolean>(true);

  console.log('peliculaId que viene de params', id)


  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabaseClient.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    getUser();
  }, []);

  console.log('usuario', user)

  const { mutate: createVoto } = useCreate<
    Voto,
    HttpError

  >({
    resource: "votos",
    meta: { select: "*" },
    successNotification: false
  });

  const {
    query: { data: dataPeliculaData },
  } = useShow<Omit<Pelicula, "id, created_at">>({
    resource: "peliculas",
    id,
    meta: {
      select: "*",
    },
  });

  const { data: dataVote } = useList<Voto>({
    resource: "votos",
    filters: [
      
      {
        field: "user_id",
        operator: "eq",
        value: user?.id
      }
    ]
  });

  console.log('Este es dataVote', dataVote)

  useEffect(() => {
    if (dataVote?.data.length! > 2) {
      setIsVotar(false);
    }
  }, [dataVote]);
  

  const addVoto = async () => {
    console.log('usuario en addVoto:',user?.id)
    console.log('pelicula en addVoto:',dataPeliculaData?.data.id)
    //const userIdComillasSimples = user?.id.replace(/"/g, "'");
    const userIdComillasSimples = user?.id.replace(/\"/g, "")
    console.log(`userIdComillasSimples en addVoto: ${userIdComillasSimples}`)
    const voto: Voto = {
      user_id: userIdComillasSimples!,
      pelicula_id: dataPeliculaData?.data.id!
    }
    console.log('voto en addVoto:',voto)

    createVoto({
      values: voto
    })
  }

  if (!dataVote && !dataPeliculaData) {
    return <p>Cargando data...</p>
  }

  console.log('valor isVotar', isVotar)

  return (
    <>
      <LayoutSubPagePelisApp
        isLoading={false}
        title="Voto película"
        help={"Ahora puedes votar por esta peli"}
        onClose={() => navigate("/app")}
        containerStyle={{ minWidth: "800px", maxWidth: "800px" }}
      >
        <Container>
          <TitleDetails label="Title Details">
            <Poster
              src={dataPeliculaData?.data?.imgURL || ""}

            />
            <DetailsContainer>


              <DetailItem>
                <DetailItemLabel>Categoria:</DetailItemLabel>
                <DetailItemValue>
                  {dataPeliculaData?.data?.categoria}
                </DetailItemValue>
              </DetailItem>
              <DetailItem>
                <DetailItemLabel>Año:</DetailItemLabel>
                <DetailItemValue>{dataPeliculaData?.data?.año}</DetailItemValue>
              </DetailItem>

              <DetailItem>
                <DetailItemLabel>Director:</DetailItemLabel>
                <DetailItemValue>{dataPeliculaData?.data?.director ?? ''}</DetailItemValue>
              </DetailItem>

              <DetailItem>
                <DetailItemLabel>Descripción:</DetailItemLabel>
                <DetailItemValue>{dataPeliculaData?.data?.descripcion ?? ''}</DetailItemValue>
              </DetailItem>
            </DetailsContainer>
            <Authenticated
                      key="authenticated-routes"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
              <DetailItem>
                <DetailPeliVotarButton
                  disabled={!isVotar}
                  onClick={() => {
                    addVoto();

                  }}
                >
                  <DetailItemTrailerIcon
                    src={getImagesUrl("/check-0.png")}
                    alt="votar"
                  />
                  Votar por esta peli
                </DetailPeliVotarButton>
              </DetailItem>
            </ Authenticated>

          </TitleDetails>
        </Container>
      </LayoutSubPagePelisApp >
    </>
  );
};

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoDetails = styled(GroupBox)`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InfoBubble = styled.img`
  width: 64px;
  height: 64px;
`;

const InfoLine = styled.div`
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoAnchor = styled(Anchor)`
    font-weight: bold;
    text-decoration: none;
    color: #0000FF;
`;

const ExternalAnchorIcon = styled.img`
  width: 22px;
  height: 22px;
  display: inline-block;
  margin-bottom: -4px;
`;

const InputContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const InputLabel = styled.div`
  font-weight: bold;
  width: 88px;
  flex-shrink: 0;
`;

const TMDBInput = styled(TextInput)`
    flex: 1;
`;

const GoButton = styled(Button)`
    width: 72px;
    font-weight: bold;
`;

const TitleDetails = styled(GroupBox)`
  padding-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  display: flex;
  gap: 32px;
`;

const Poster = styled(ImagePixelated)`
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.material};

  &::before {
    content: "";
    background-color: ${({ theme }) => theme.material};
    background-image: url(${getImagesUrl("/movie-poster-placeholder.png")});
    background-size: 200px 300px;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 305px;
  min-height: 305px;
`;

const DetailItem = styled.div`
  display: flex;
  padding: 8px 0;
  justify-content: flex-start;
`;

const DetailItemLabel = styled.div`
  flex-shrink: 0;
  width: 88px;
  font-weight: bold;
  color: #707070;
`;

const DetailItemValue = styled.div`
  flex: 1;
`;

const CopiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const CopiesInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CopiesLabel = styled.div``;

const CopiesInput = styled(NumberInput)`
  width: 80px;
  max-width: 80px;
  min-width: unset;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const ExistingCheckmark = styled.img`
  width: 24px;
  height: 24px;
`;

const ExistingContainer = styled.div<{ $visible: boolean }>`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: bold;
  color: #2F721E;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

const ButtonsContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 12px;
`;

const ViewDetailsButton = styled(Button)`
  font-weight: bold;
  min-width: 158px;
`;

const AddButton = styled(Button)`
  min-width: 158px;
  font-weight: bold;
`;

const CancelButton = styled(Button)`
  width: 110px;
`;

const DetailPeliVotarButton = styled(Button)`
  width: 192px;
`;

const DetailItemTrailerIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;