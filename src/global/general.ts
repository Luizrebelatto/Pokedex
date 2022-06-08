import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(100, 720)}px;
    font-weight: bold;
`;

export const ApplicationTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(32, 720)}px;
  font-weight: bold;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(26, 720)}px;
  font-weight: bold;
`;

export const FilterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16, 720)}px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16, 720)}px;
  font-weight: 400;
`;

export const PokemonNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 720)}px;
  font-weight: bold;
`;

export const PokemonType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12, 720)}px;
  font-weight: 500;
`;