import React from 'react';

import { Card } from '../../components/Card';

import { Wrapper, Title, Instructions, InputView, Icon, TextInput } from './styles';

export function Home(){
  return(
    <Wrapper>
      <Title>Pokédex</Title>
      <Instructions>Search for Pokémon by name or using the National Pokédex number.</Instructions>

      <InputView>
        <Icon name="search"/>
        <TextInput>What Pokemon are you looking for?</TextInput>
      </InputView>

      <Card/>
    </Wrapper>
  )
}