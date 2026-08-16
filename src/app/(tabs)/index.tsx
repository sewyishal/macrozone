import { globalStyles } from '../../../styles/global';
import { Link } from 'expo-router';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      
    <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
         All Meals
      </Link>
      <Link href='/add-meal' style={{ fontSize: 18, color: '#007bff' }}>
        Add New Meal  
      </Link>
    </ScrollView>
  );
}