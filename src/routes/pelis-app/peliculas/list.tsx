import { Link, useNavigate } from "react-router-dom";
import { getDefaultFilter, useList, useTable } from "@refinedev/core";
import { User } from '@supabase/supabase-js';

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
import { Pagination } from "../../../components/pagination";
import { DangerIcon } from "../../../components/icons/danger-icon";
import { OPTIONS_YEAR } from "../../../utility/options-year";
import { Pelicula, Voto } from "../../../types";
import { supabaseClient } from "../../../supabase-client";
import { useEffect, useState } from "react";

export const PelisAppPageBrowsePelis = () => {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabaseClient.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    getUser();
  }, []);

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

  const {
    tableQuery,
    pageCount,
    current,
    setCurrent,
    filters,
    setFilters,
  } = useTable<Pelicula>({
    resource: "peliculas",
    meta: {
      select: "*",
    },
    pagination: {
      pageSize: 20
    }
  });
  const pelis = tableQuery?.data?.data || [];
  console.log('pelis en lista pelis', pelis)
  const pelisIsLoading = tableQuery?.isLoading || false;
  const isLoading = pelisIsLoading;
  const conteoVotosUser = dataVote?.data.length!


  
  return (
    <LayoutSubPagePelisApp
      isLoading={isLoading}
      title="Películas"
      help={"Puedes ver algunas de las películas más famosas de las décadas de los 80's y 90's."}
      onClose={() => navigate("/app")}
    >
      <Container>
      <TextoVotos>Te quedan {conteoVotosUser} de 2 votos </TextoVotos>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell $width={32}>Imagen</TableHeadCell>
              <TableHeadCell $width={140}>Titulo</TableHeadCell>
              <TableHeadCell $width={120}>Categoria</TableHeadCell>
              <TableHeadCell $width={64}>Año</TableHeadCell>
              <TableHeadCell $width={48}>Votar</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              pelis.map((peli) => {
                return (
                  <TableRow key={peli.id}>
                    
                    <TableDataCell $width={90}>
                      <Imagen src={peli.imgURL} />
                      </TableDataCell>
                    <TableDataCell $width={150}>{peli.titulo}</TableDataCell>
                    <TableDataCell $width={120}>{peli.categoria}</TableDataCell>
                    <TableDataCell $width={64}>{peli.año}</TableDataCell>
                    
                    {/* <TableDataCell $width={82}>
                      {peli.rentals.length}
                    </TableDataCell> */}
                    <TableDataCell $width={48} style={{ textAlign: "center" }}>
                      <Link to={`/app/peliculas/${peli.id}`}>Votar</Link>
                    </TableDataCell>
                  </TableRow>
                );
              })}
            {isLoading && <Hourglass size={32} style={{}} />}
          </TableBody>
        </Table>
        <Pagination
          pageCount={pageCount}
          current={current}
          setCurrent={setCurrent}
        />
      </Container>
    </LayoutSubPagePelisApp>
  );
};

const Container = styled.div`
  padding: 16px 24px;
`;

const TextoVotos = styled.p`
  padding-bottom: 10px; 
`;

const TableDataCell = styled(DefaultTableDataCell)<{
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

const TableHeadCell = styled(DefaultTableHeadCell)<{
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