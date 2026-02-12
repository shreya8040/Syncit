import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Profile info</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    right: '20%',
      bottom: '5%',
      width:50,
      height:50,
  },
});
