import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(10)
  return (
    <View style={styles.container}>
      
      <Text style={styles.textHuge}>{count}</Text>

      {/*<Pressable onPress={() => setCount(count + 1)} style={styles.floatingButton1} onLongPress={() => setCount(0)}>
        <Text>+1</Text>
      </Pressable>
      <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.floatingButton2} onLongPress={() => setCount(10)}>
        <Text>-1</Text>
      </TouchableOpacity>*/}
      <FAB label='+1' onPress={() => setCount(count + 1)} onLongPress={() => setCount(0)}/>
      <FAB label='-1' onPress={() => setCount(count - 1)} onLongPress={() => setCount(10)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 80,
    fontWeight: 'thin',
    color: 'white'
  },
  floatingButton1:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'gold',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4
}, 
  floatingButton2:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'gold',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4
}
});
