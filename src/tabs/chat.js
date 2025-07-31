import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen() {
    return (
        <View style={chatPlaceholderStyles.container}>
            <Text style={chatPlaceholderStyles.text}>This is the Chat screen.</Text>
            <Text style={chatPlaceholderStyles.subText}>Content will be added here later.</Text>
        </View>
    );
}

const chatPlaceholderStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111827', justifyContent: 'center', alignItems: 'center', padding: 20 },
    text: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
    subText: { fontSize: 16, color: '#d1d5db' },
});
