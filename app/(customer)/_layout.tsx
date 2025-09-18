import { Stack, Redirect } from 'expo-router';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useAuth } from '../providers/AuthProvider';

export default function CustomerLayout() {
  const { session } = useAuth();
  return (
    <>
      <Stack>
      <Stack.Screen name="index" options={{ title: 'AirRun - Customer' }} />
        <Stack.Screen name="login" options={{ title: 'Sign in' }} />
      </Stack>
      {!session && <Redirect href="/login" />}
      <View pointerEvents="box-none" style={styles.fabWrap}>
        <Pressable accessibilityLabel="New request" style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fabWrap: { position: 'absolute', bottom: 28, right: 20 },
  fab: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 4 } },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 30, fontWeight: '700' },
});


