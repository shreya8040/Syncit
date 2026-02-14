import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, Text, View } from 'react-native';


export default function Modal() {
  return (
    <View style={styles.container}>
     <Text style={{fontSize:30, fontWeight:'bold', marginTop:20, color:"black"}}>Modal Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
