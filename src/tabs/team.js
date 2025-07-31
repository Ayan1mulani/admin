import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeamScreen() {
    return (
        <View style={placeholderStyles.container}>
            <Text style={placeholderStyles.text}>This is the Team screen.</Text>
            <Text style={placeholderStyles.subText}>Content will be added here later.</Text>
        </View>
    );
}

const placeholderStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111827', justifyContent: 'center', alignItems: 'center', padding: 20 },
    text: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
    subText: { fontSize: 16, color: '#d1d5db' },
});
