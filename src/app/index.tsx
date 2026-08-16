import { Text, ScrollView } from 'react-native';
import {Link} from'expo-router'
import { globalStyles } from '../../styles/global';
import HomeHeader from './HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader/>
      <Link href='./meals' style={{fontSize: 18, color:'#007bff'}}>Go to Meals</Link>
    </ScrollView>
  );
}

