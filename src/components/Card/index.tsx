import React from 'react';

import { Wrapper, TextId, Name, ViewBagde, TextTitle } from './styles';
import { View, Text } from 'react-native';
import Pattern from '../../assets/Pattern.svg';
import Pokeball from '../../assets/Pokeball-Gradient.svg';
import Bulbassauro from '../../assets/01.svg';

import Bug from '../../assets/types/Bug.svg'

export function Card(){
  return(
    <Wrapper>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginLeft:20}}>
        <View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TextId>#001</TextId>
            <Pattern/>
          </View>
          <Name>Bulbassaur</Name>
          <ViewBagde>
            <Bug width={14} height={14}/>
            <TextTitle>Bug</TextTitle>
          </ViewBagde>
        </View>
        <Pokeball/>
        
      </View>
      <View style={{position:'absolute', marginLeft:'52%'}}>
          <Bulbassauro/>
        </View>
    </Wrapper>
  )
}