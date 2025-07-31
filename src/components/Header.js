import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
// Import the LogOut icon and the useNavigation hook
import { Bell, User, LogOut } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ options }) {
  const { title } = options;
  const navigation = useNavigation();

  // State to control the visibility of the dropdown menu
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    toggleMenu(); // Close the menu first
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => navigation.replace('Login') 
        }
      ]
    );
  };

  return (
    // Use a <View> wrapper to allow absolute positioning of the dropdown
    <View>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <Image
              source={{ uri: 'https://ism-users.s3.amazonaws.com/logo/290/logo_290.jpeg' }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <View>
                <Bell size={22} color="#64748b" strokeWidth={2} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>4</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* The user icon now toggles the menu */}
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7} onPress={toggleMenu}>
              <User size={22} color="#64748b" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* This is the dropdown menu */}
      {isMenuVisible && (
        // Use a Pressable to close the menu when tapping outside
        <Pressable style={styles.overlay} onPress={toggleMenu}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <LogOut size={20} color="#ef4444" strokeWidth={2} />
                <Text style={styles.menuItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    zIndex: 10, // Ensure header is above other content
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginTop: StatusBar.currentHeight, // Adjust for status bar height
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 100,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 8,
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  // Styles for the dropdown menu
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  menuContainer: {
    position: 'absolute',
    top: 80, // Position it below the header
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
