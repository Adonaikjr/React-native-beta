import styled from 'styled-components/native';
import { RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    background: ${({theme}) => theme.COLORS.PURPLE_LOGO};
    height: 100%;
 
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    font-size: ${RFPercentage(5)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    align-items: center;
    justify-content: center;
`


export const UserInfo = styled.View`

`



export const UserTitle = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${({theme}) => theme.COLORS.GREEN_LOGO};
    font-family: ${({theme}) => theme.FONTS.FONT_700};
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    text-shadow: -1px 1px 5px ${({theme}) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.View`
    margin-top: 24px;
    
    align-items: center;
`

export const User = styled.TextInput`
margin-top: ${RFPercentage(5)}px;
border-radius: 5px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
width: ${RFPercentage(36)}px;
height: ${RFPercentage(5)}px;



`
export const InputTitle = styled.Text`
color: ${({theme}) => theme.COLORS.WHITE};
font-family: ${({theme}) => theme.FONTS.FONT_400};

`;

import { Entypo} from '@expo/vector-icons';
export const IconEventypo = styled(Entypo)`
color:${({theme}) => theme.COLORS.PURPLE_LOGO};
font-size: ${RFPercentage(24)}px;
`

import { MaterialCommunityIcons} from '@expo/vector-icons';
export const IconMaterialCommunityIcons = styled(MaterialCommunityIcons)`
color: ${({theme}) => theme.COLORS.GREEN_LOGO};
font-size: ${RFPercentage(3)}px;

`

import { Feather } from '@expo/vector-icons';
export const IconFeather = styled(Feather)`
 color: ${({theme}) => theme.COLORS.GREEN_LOGO};   
 font-size: ${RFPercentage(3)}px;
`

export const Span = styled.View`
    
    border-radius: 12px;
    background-color: ${({theme}) => theme.COLORS.PURPLE_LOGO};
    height: ${RFPercentage(10)}px;

    margin-top: ${RFPercentage(-10)}px;
`
export const ButtonEffect = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.GREEN_LOGO};
  border-radius: 8px;
  margin-top: 24px;
  width: ${RFPercentage(35)}px;
  height: ${RFPercentage(6)}px;
  justify-content: center;
`
export const TextButton = styled.Text`
    text-align: center;
    color: ${({theme}) => theme.COLORS.PURPLE_LOGO};
    text-shadow: -1px 1px 5px ${({theme}) => theme.COLORS.BACKGROUND_900};
    font-family: ${({theme}) => theme.FONTS.FONT_700};
    font-size: 24px;
`