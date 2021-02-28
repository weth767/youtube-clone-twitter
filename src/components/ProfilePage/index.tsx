import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>João Paulo de Souza</h1>
        <h2>@joaopaulo767</h2>

        <p>
          Developer at <a href="https://celulaweb.com.br">@CelulaWeb</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Formiga - MG, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 de junho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
