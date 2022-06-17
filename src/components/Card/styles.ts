import styled from "styled-components/native";
import { PokemonName, PokemonNumber, PokemonType } from "../../global/general";

export const Wrapper = styled.View`
  width: 334px;
  height: 115px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.type.bug};
`;

export const TextId = styled(PokemonNumber)`
  color: ${({ theme }) => theme.text.number};
  font-weight: 700;
  padding-right: 50px;
  padding-top: 12px;
`;

export const Name = styled(PokemonName)`
  color: ${({ theme }) => theme.text.white};
`;

export const ViewBagde = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 25px;
  background-color: blueviolet;
  border-radius: 5px;
`;

export const TextTitle = styled(PokemonType)`
  padding-left: 5px;
  color: white;
`;
