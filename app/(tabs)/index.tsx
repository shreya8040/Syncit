import { ThemedText } from '@/components/themed-text';
import { View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';


export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor:useThemeColor({},'background')}}>
      <View style={{flex:0.1, backgroundColor:"#024c46", height:'10%', marginTop:'10%', width:'95%', borderRadius:20, alignSelf:'center', justifyContent:'center'}}>
   
      <ThemedText type='title'>Syncit </ThemedText>
         
     </View>
     </View>
  );
}