import { Stack } from 'expo-router';
import { colors } from '../../styles/global';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle:{backgroundColor: colors.header}
        
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="meals" />
    </Stack>
  );
}