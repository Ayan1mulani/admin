import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Users, Briefcase, MessageSquare } from 'lucide-react-native';

// Import your screen components
import HomeScreen from './tabs/home';
import TeamScreen from './tabs/team';
import ProjectsScreen from './tabs/projects';
import ChatScreen from './tabs/chat';
import Header from './components/Header'; // Your custom header

const Tab = createBottomTabNavigator();

export default function MainAppScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Use your custom Header component for each screen
        header: (props) => <Header {...props} />,
        tabBarIcon: ({ color, focused }) => {
          const icons = {
            Home: Home,
            Team: Users,
            Projects: Briefcase,
            Chat: MessageSquare,
          };

          const IconComponent = icons[route.name] || Home;

          return (
            <IconComponent
              color={color}
              size={focused ? 26 : 24}
              strokeWidth={focused ? 2.5 : 2}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'FacTech QA', // This title is passed to your Header
        }} 
      />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}
