import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    //propiedades
    label: string

    //metodos
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({label, onPress, onLongPress}: Props) {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style ={styles.floatingButton1}>
        <Text>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    floatingButton1: {
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
    }
})