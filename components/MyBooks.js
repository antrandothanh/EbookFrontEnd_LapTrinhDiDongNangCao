import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Thư viện" />
            </Appbar.Header>
            <Text>Thư viện</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});