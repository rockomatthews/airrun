import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function WorkerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker</Text>
      <Text>View nearby errands and accept jobs.</Text>
      <Link href="/(customer)" asChild>
        <Pressable style={styles.cta}><Text style={styles.ctaText}>Switch to Customer</Text></Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
  cta: { marginTop: 16, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#111', borderRadius: 8 },
  ctaText: { color: '#fff', fontWeight: '600' },
});


