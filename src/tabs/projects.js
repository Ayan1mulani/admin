import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
    return (
        <View style={projectsPlaceholderStyles.container}>
            <Text style={projectsPlaceholderStyles.text}>This is the Projects screen.</Text>
            <Text style={projectsPlaceholderStyles.subText}>Content will be added here later.</Text>
        </View>
    );
}
const projectsPlaceholderStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111827', justifyContent: 'center', alignItems: 'center', padding: 20 },
    text: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
    subText: { fontSize: 16, color: '#d1d5db' },
});
