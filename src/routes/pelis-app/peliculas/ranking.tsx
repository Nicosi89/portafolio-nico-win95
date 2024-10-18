import { useNavigate } from "react-router-dom";
import { useList } from "@refinedev/core";

import {
    Hourglass,
    Select,
    Table,
    TableBody,
    TableDataCell as DefaultTableDataCell,
    TableHead,
    TableHeadCell as DefaultTableHeadCell,
    TableRow,
    TextInput,
} from "react95";
import styled from "styled-components";
import { LayoutSubPagePelisApp } from "../../../components/layout/90s-app";

import { Pelicula, Voto } from "../../../types";
import { useEffect, useState } from "react";

export const PelisAppPageRankingPelis = () => {
    const [isVotar, setIsVotar] = useState<boolean>(true);

    const navigate = useNavigate();

    
    const { data, isLoading, isError } = useList({
        resource: "peliculas",
        meta: {
            select: `
                id, 
                imgURL,
                titulo, 
                año,
                votos (id)
            `,
        },
        pagination: {
            pageSize: 20
          }
    });

    
    
    
      

    const ranking = data?.data.sort((a, b) => b.votos.length - a.votos.length)

    console.log('data pelis ranking', data?.data)

    if (isLoading) return <div>Cargando...</div>;
    if (isError) return <div>Error cargando las películas</div>;


    return (
        <LayoutSubPagePelisApp
            isLoading={isLoading}
            title="Ranking películas"
            help={"Puedes ver algunas de las películas más famosas de las décadas de los 80's y 90's."}
            onClose={() => navigate("/app")}
        >
            <Container>
            
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableHeadCell $width={40}>Posición</TableHeadCell>
                            <TableHeadCell $width={120}>Imagen</TableHeadCell>
                            <TableHeadCell $width={60}>Titulo</TableHeadCell>
                            <TableHeadCell $width={64}>Año</TableHeadCell>
                            <TableHeadCell $width={48}>Votos</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!isLoading &&
                            ranking!.map((peli, index) => {


                                return (
                                    <TableRow key={peli.id}>
                                        <TableDataCell $width={50}>{index + 1}</TableDataCell>
                                        <TableDataCell $width={100}>
                                            <Imagen src={peli.imgURL} />
                                        </TableDataCell>
                                        <TableDataCell $width={200}>{peli.titulo}</TableDataCell>
                                        <TableDataCell $width={64}>{peli.año}</TableDataCell>
                                        <TableDataCell $width={48}>{peli.votos.length}</TableDataCell>
                                    </TableRow>
                                );
                            })}
                        {isLoading && <Hourglass size={32} style={{}} />}
                    </TableBody>
                </Table>
                
            </Container>
        </LayoutSubPagePelisApp>
    );
};


const Container = styled.div`
  padding: 16px 24px;
`;

const FilterContainer = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 372px 200px;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 32px;
`;

const FilterInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterInputLabel = styled.div`
  width: 104px;
`;

const FilterInputText = styled(TextInput)`
    flex: 1;
`;

const FilterInputSelect = styled(Select)`
  flex: 1;
`;

const TableDataCell = styled(DefaultTableDataCell) <{
    $width?: number;
    $px?: number;
}>`
  max-width: ${({ $width }) => `${$width}px`};
  min-width: ${({ $width }) => `${$width}px`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ $px }) =>
        typeof $px !== "undefined" &&
        `padding-left: ${$px}px; padding-right: ${$px}px;`}
`;

const TableHeadCell = styled(DefaultTableHeadCell) <{
    $width?: number;
    $px?: number;
}>`
  text-align: left;
  max-width: ${({ $width }) => `${$width}px`};
  min-width: ${({ $width }) => `${$width}px`};
  width: ${({ $width }) => `${$width}px`};
  ${({ $px }) =>
        typeof $px !== "undefined" &&
        `padding-left: ${$px}px; padding-right: ${$px}px;`}
`;

const Imagen = styled.img`
  user-select: none;
  margin-right: auto;
  margin-left: auto;
  width: 90px;
  height: 140px;
`;