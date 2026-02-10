import { ThemedText } from '@/components/themed-text';
import { Text,View, ImageBackground, StyleSheet, StatusBar, Button, Alert, Pressable } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useThemeColor } from '@/hooks/use-theme-color';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useState } from 'react';
import * as Haptics from 'expo-haptics';

const image = {uri: 'https://i.ibb.co/1tHDmqwR/Theme-3.png'};

 
export default function HomeScreen() {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1,alignItems: 'center', width:'100%',height:'100%', paddingTop:StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 5, paddingLeft:5, paddingRight:10, backgroundColor:useThemeColor({},'background')}} edges={['left', 'right']}>
       
        <ImageBackground source={image} resizeMode='cover' style={{flex:0.18, borderRadius:20 , overflow: 'hidden',  alignItems:'center', width:'100%', height:'100%'}}></ImageBackground>
        <Text style={{fontSize:30, fontWeight:'bold', marginTop:20, color:useThemeColor({},'text')}}>Welcome to SyncIt!</Text>
        <View style={styles.checkboxContainer}>
          
          <Checkbox
          style={styles.checkboxes}
          value={isChecked}
          onValueChange={(newValue) => {
            setChecked(newValue);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
  
          color={isChecked ? '#fb8f30' : undefined}
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
          color={isChecked ? '#7b2dce' : undefined}
        />

        
        </View>
        <Pressable style={styles.pressableStyle} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}></Pressable>
             </SafeAreaView>
      
     </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  checkboxes:{
    padding:10,
    margin:10,
    marginTop:20
  },
  checkboxContainer:{
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',         
  alignSelf: 'flex-start',
  marginTop: 40,
  paddingHorizontal: 20,
  },
  pressableStyle:{
    borderRadius:50,
    backgroundColor:"#c0a596",
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width:80,
    height:80,
    
    
  }
})