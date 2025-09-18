import { Stack } from 'expo-router';

export default function WorkerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'AirRun - Worker' }} />
    </Stack>
  );
}


