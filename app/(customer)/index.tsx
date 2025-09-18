import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function CustomerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer</Text>
      <Text>Describe your errand, and we’ll match a runner.</Text>
      <Link href="/login" asChild>
        <Pressable style={styles.cta}><Text style={styles.ctaText}>Sign in</Text></Pressable>
      </Link>
      <Link href="/(worker)" asChild>
        <Pressable style={styles.cta}><Text style={styles.ctaText}>Switch to Worker</Text></Pressable>
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


