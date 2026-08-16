import { Text, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import HomeHeader from './HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader/>
    </ScrollView>
  );
}

