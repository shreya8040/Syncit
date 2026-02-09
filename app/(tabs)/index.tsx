import { ThemedText } from '@/components/themed-text';
import { Text,View, ImageBackground, StyleSheet, StatusBar, Button, Alert } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useThemeColor } from '@/hooks/use-theme-color';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useState } from 'react';

const image = {uri: 'https://i.ibb.co/27DM0ygH/Whats-App-Image-2026-02-09-at-8-19-25-PM.jpg'};

 
export default function HomeScreen() {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1,alignItems: 'center', width:'100%',height:'100%',  backgroundColor:useThemeColor({},'background')}} edges={['left', 'right']}>
      
        <ImageBackground source={image} resizeMode='cover' style={{flex:0.1,  marginTop:35, marginLeft:2, borderRadius:20 , overflow: 'hidden',  alignItems:'center', width:'100%', height:'100%'}}></ImageBackground>
        <Text style={{fontSize:30, fontWeight:'bold', marginTop:20, color:useThemeColor({},'text')}}>Welcome to SyncIt!</Text>
        <View style={styles.checkboxContainer}>
          
          <Checkbox
          style={styles.checkboxes}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#bb30fb' : undefined}
        />
        <Checkbox
          style={styles.checkboxes}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#bb30fb' : undefined}
        />
        <Checkbox
          style={styles.checkboxes}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#bb30fb' : undefined}
        />
        
        </View>
             </SafeAreaView>
      
     </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  checkboxes:{
    padding:10,
    margin:8
  },
  checkboxContainer:{
  flexDirection: 'row',
  alignItems: 'center',
 
  width: '100%',         
  alignSelf: 'flex-start',
  marginTop: 30,
  paddingHorizontal: 20,
  }
})