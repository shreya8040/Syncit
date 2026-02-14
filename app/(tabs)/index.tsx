import { ThemedText } from '@/components/themed-text';
import { Text ,View, ImageBackground, StyleSheet, StatusBar, Button, Alert, Pressable } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { useThemeColor } from '@/hooks/use-theme-color';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useState } from 'react';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';

const image1 = {uri: 'https://i.ibb.co/1tHDmqwR/Theme-3.png'};
const image2 = {uri: 'https://i.ibb.co/5WRVrFDz/Theme-2.png'}
const checklist = Array.from({length:5})
 
export default function HomeScreen() {
  const [checkedStates, setCheckedStates] = useState(checklist.map(() => false));
  const [apptheme , setAppTheme] = useState('light');
  
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1,alignItems: 'center', width:'100%',height:'100%', paddingTop:StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 5, paddingLeft:5, paddingRight:10, backgroundColor:useThemeColor({},'background')}} edges={['left', 'right']}>
       
        <ImageBackground source={apptheme==='light' ? image2 : image1} resizeMode='cover' style={{flex:0.18, borderRadius:20 , overflow: 'hidden',  alignItems:'center', width:'100%', height:'100%'}} >
          <Pressable onPress={() => {
            setAppTheme(apptheme === 'light' ? 'dark' : 'light');
           
          }} style={{  backgroundColor:"#ffffff00", width:'100%', height:'100%'}}></Pressable>
        </ImageBackground>
        <Text style={{fontSize:30, fontWeight:'bold', marginTop:20, color:useThemeColor({},'text')}}>Your Synced task list</Text>
        <View style={styles.checkboxContainer}>
        {checklist.map((_, index) => (
          <Checkbox
            key={index}
            style={styles.checkboxes}
            value={checkedStates[index]}
            onValueChange={(newValue) => {
              const newCheckedStates = [...checkedStates];
              newCheckedStates[index] = newValue;
              setCheckedStates(newCheckedStates);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            color={checkedStates[index] ? apptheme === 'dark' ? '#c0a596' : '#7c234b' : undefined}
          />
        ))}
        
        
        </View>
        <Pressable style={apptheme === 'light' ? styles.pressableStyle2 : styles.pressableStyle1} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
          <Link href="/modal" onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)} style={{width:80, height:80}}></Link>
          </Pressable>
        
       
      
       
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
    flex:0.3,
    },
    pressableStyle1:{
      borderRadius:50,
      backgroundColor:"#c0a596",
      position: 'absolute',
      alignSelf: 'center',
      alignItems:'center',
      justifyContent:'center',
      bottom: '4%',
      width:80,
      height:80,
      },
      pressableStyle2:{
      borderRadius:50,
      backgroundColor:"#7c234b",
      position: 'absolute',
      alignSelf: 'center',
      alignItems:'center',
      justifyContent:'center',
      bottom: '4%',
      width:80,
      height:80,
      },
      profile:{
      borderRadius:50,
      backgroundColor:"#f5e5dd",
      position: 'absolute',
      right: '20%',
      bottom: '5%',
      width:50,
      height:50,
    }
})