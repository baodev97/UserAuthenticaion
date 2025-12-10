import { AuthContext } from '@/store/auth-context';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
    const [messageFetching, setMessagefetching] = useState<string|null>(null);
    const AuthCtx = useContext(AuthContext)
    const token = AuthCtx.token

    useEffect(()=>{
       axios.get('https://expensetrackapi-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth='+token).then(
        (res)=>{
            setMessagefetching(res.data)
        }
       )
    },[token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{messageFetching}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});