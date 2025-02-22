import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');

    const accessToHome = () => {
        if (email === 'admin@gmail.com' && password === 'admin') {
            navigation.navigate('BottomTabNavigator');
        } else {
            alert('Email or password is incorrect');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={accessToHome}>
                        Sign In
                    </Button>
                </View>
                <Button onPress={() => navigation.navigate('SignUp')}>
                    Go to Sign Up
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
    },
    buttonContainer: {
        marginBottom: 5,
    },
});