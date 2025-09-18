import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useAuth } from '../providers/AuthProvider';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithPassword } = useAuth();

  const onEmailPassword = async () => {
    try {
      await signInWithPassword(email, password);
    } catch (e: any) {
      Alert.alert('Sign-in failed', e?.message ?? String(e));
    }
  };
  const onGoogle = async () => {
    await WebBrowser.openBrowserAsync('https://example.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" placeholder="Email" style={styles.input} />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Password" style={styles.input} />
      <Pressable onPress={onEmailPassword} style={styles.btn}><Text style={styles.btnText}>Continue</Text></Pressable>

      <View style={{ height: 16 }} />
      <Pressable onPress={onGoogle} style={[styles.btn, styles.google]}><Text style={styles.btnText}>Continue with Google</Text></Pressable>

      {Platform.OS === 'ios' && (
        <View style={{ marginTop: 16 }}>
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={8}
            style={{ width: '100%', height: 44 }}
            onPress={() => Alert.alert('Not yet wired', 'Apple Sign-In will be connected.')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 12, height: 44 },
  btn: { backgroundColor: '#111', borderRadius: 8, height: 44, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#fff', fontWeight: '600' },
  google: { backgroundColor: '#4285F4' },
});


