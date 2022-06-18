import styled from "styled-components/native";
import { ApplicationTitle, Description } from "../../global/general";
import { FontAwesome5 } from '@expo/vector-icons';

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.background.white};
`;

export const Title = styled(ApplicationTitle)`
  color: ${({ theme }) => theme.text.black}
`;

export const Instructions = styled(Description)`
  color: ${({ theme }) => theme.text.grey};
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const InputView = styled.View`
  flex-direction: row;
  width: 334px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.default_input};
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.grey};
`;

export const TextInput = styled(Description)`
  padding-left: 12px;
  color: ${({ theme }) => theme.text.grey};
`;