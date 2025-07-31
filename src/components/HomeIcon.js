import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeIcon({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={homeIconStyles.iconContainer} onPress={onPress}>
      <View style={homeIconStyles.iconWrapper}>
        {icon}
      </View>
      <Text style={homeIconStyles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const homeIconStyles = StyleSheet.create({
    iconContainer: { width: '30%', alignItems: 'center', marginBottom: 24 },
    iconWrapper: { width: 70, height: 70, borderRadius: 12, backgroundColor: '#2c678fff', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
    iconLabel: { color: '#074B7C', fontSize: 12, textAlign: 'center' },
});
