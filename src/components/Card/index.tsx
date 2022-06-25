import React from 'react';

import { Wrapper, TextId, Name, ViewBagde, TextTitle, PokemonImage, Content, Header } from './styles';
import { View } from 'react-native';

import Pattern from '../../assets/Pattern.svg';
import Pokeball from '../../assets/Pokeball-Gradient.svg';
import Bulbassauro from '../../assets/01.svg';

import Bug from '../../assets/types/Bug.svg'

export function Card(){
  return (
    <Wrapper>

      <Content>
        <View>
          <Header>
            <TextId>#001</TextId>
            <Pattern/>
          </Header>
          <Name>Bulbassaur</Name>
          <ViewBagde>
            <Bug width={14} height={14}/>
            <TextTitle>Bug</TextTitle>
          </ViewBagde>
        </View>
        <Pokeball/>
      </Content>

      <PokemonImage>
          <Bulbassauro/>
      </PokemonImage>
    </Wrapper>
  )
}