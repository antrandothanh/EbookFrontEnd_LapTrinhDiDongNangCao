import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);
    }, [navigation]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ebook xin chào</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
    }
});