import { Platform,Text,View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Hello Mobile App</Text>
      <Text>Running on: {Platform.OS}</Text>
    </View>
  );
}