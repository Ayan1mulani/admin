import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
  BarChart2, FileText, CreditCard, Gauge, AlertTriangle, Users,
  Mail, Calendar, Archive, Settings, Building, Flag, UploadCloud,
  DownloadCloud, FolderArchive, UserCheck, Folder, ShoppingCart,
  ClipboardList, Truck, LayoutDashboard, Calculator
} from 'lucide-react-native';

// Import Components from the new path
import HomeIcon from '../components/HomeIcon';
import SubHeader from '../components/SubHeader'; 

export default function HomeScreen() {
  const iconColor = '#fdfdfdff';

  const homeOptions = [
    { label: 'Dashboard', icon: <BarChart2 size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Bill', icon: <FileText size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Payment', icon: <CreditCard size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Meter', icon: <Gauge size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Service Request', icon: <AlertTriangle size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Customer', icon: <Users size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Communication', icon: <Mail size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Accounting', icon: <Calendar size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Asset & PPM', icon: <Archive size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Settings', icon: <Settings size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Facility', icon: <Building size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Patrolling', icon: <Flag size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Custom Report', icon: <UploadCloud size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Download Report', icon: <DownloadCloud size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Doc Repository', icon: <FolderArchive size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Visitor', icon: <UserCheck size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Inventory', icon: <Folder size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Purchase', icon: <ShoppingCart size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Survey', icon: <ClipboardList size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Gate Pass', icon: <Truck size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Master Dashboard', icon: <LayoutDashboard size={28} color={iconColor} strokeWidth={2.5} /> },
    { label: 'Budget', icon: <Calculator size={28} color={iconColor} strokeWidth={2.5} /> },
  ];

  const handleIconPress = (label) => {
    console.log(`${label} icon pressed`);
  };

  return (
    <View style={styles.container}>
      <SubHeader />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {homeOptions.map((option, index) => (
            <HomeIcon
              key={option.label}
              icon={option.icon}
              label={option.label}
              onPress={() => handleIconPress(option.label)}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f6f6f6ff', 
  },
  scrollViewContent: { 
    padding: 20,
    paddingBottom: 30,
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    gap: 16,
  },
});
