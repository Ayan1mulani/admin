import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Grid3x3, PenSquare, Settings, RefreshCw, HelpCircle, Phone } from 'lucide-react-native';

export default function SubHeader() {
  const iconColor = '#ffffffff';
  const iconSize = 24;

  return (
    <View style={subHeaderStyles.container}>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <Grid3x3 color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <PenSquare color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <Settings color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <RefreshCw color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <HelpCircle color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity style={subHeaderStyles.iconButton}>
        <Phone color={iconColor} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
}

const subHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1996D3',
    paddingVertical: 7,
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
});
