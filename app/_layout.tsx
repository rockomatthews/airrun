import { Tabs } from 'expo-router';
import { AuthProvider } from './providers/AuthProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Tabs>
        <Tabs.Screen name="(customer)" options={{ title: 'Customer' }} />
        <Tabs.Screen name="(worker)" options={{ title: 'Worker', href: null }} />
      </Tabs>
    </AuthProvider>
  );
}


