import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Appbar } from 'react-native-paper';

export default function Home() {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Trang chủ" />
            </Appbar.Header>
            <View>
                <Text>Trang chủ</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});