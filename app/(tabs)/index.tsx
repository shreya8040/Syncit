import { ThemedText } from '@/components/themed-text';
import { View, ImageBackground, StyleSheet, StatusBar, Button, Alert } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';

const image = {uri: 'https://i.pinimg.com/736x/a4/fd/14/a4fd14265f85fcdc3ec396472cb20282.jpg'};


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1, width:'100%',height:'100%', alignItems:'center', backgroundColor:useThemeColor({},'background')}} edges={['left', 'right']}>
      
        <ImageBackground source={image} resizeMode='cover' style={{flex:0.1,  marginTop:35, marginLeft:35, alignItems:'center', width:'90%', height:'100%'}}></ImageBackground>
        <Button
        title="Click Me"
        color="#ff5a68" // Platform-specific color behavior
        accessibilityLabel="Tap this button to see an alert"
        
      />
        </SafeAreaView>
      
     </SafeAreaProvider>
  );
}