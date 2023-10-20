import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import { faHome, faTree, faCamera, faUser, faMoneyBill } from '@fortawesome/free-solid-svg-icons'; 

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import CashflowScreen from '../screens/CashflowScreen';
import ScanScreen from '../screens/ScanScreen';
import FarmScreen from '../screens/FarmScreen';

const homeName = "Home";
const FarmName = "Farm";
const ScanName = "Scan";
const cashflowName = "Cashflow";
const AccountName = "Account";

const Tab = createBottomTabNavigator();

const ScanTabIcon = ({ focused, size, color }) => (
  <View style={styles.scanTabIcon}>
    <FontAwesomeIcon icon={focused ? faCamera : faCamera} size={size} color={focused ? 'green' : '#6bb120'} />
  </View>
);

const styles = StyleSheet.create({
  scanTabIcon: {
    position: 'relative',
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#afd69b', 
  },
  customIcon: {
    width: 30,
    height: 30,
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconComponent;
            let rn = route.name;

            if (rn === homeName) {
              iconComponent = <FontAwesomeIcon icon={focused ? faHome : faHome} size={size} color={focused ? 'green' : '#afd69b'} />;
            } else if (rn === FarmName) {
              iconComponent = <FontAwesomeIcon icon={focused ? faTree : faTree} size={size} color={focused ? 'green' : '#afd69b'} />;
            } else if (rn === AccountName) {
              iconComponent = <FontAwesomeIcon icon={focused ? faUser : faUser} size={size} color={focused ? 'green' : '#afd69b'} />;
            } else if (rn === cashflowName) {
              iconComponent = <FontAwesomeIcon icon={focused ? faMoneyBill : faMoneyBill} size={size} color={focused ? 'green' : '#afd69b'} />;
            } else if (rn === ScanName) {
              iconComponent = <ScanTabIcon focused={focused} size={size} />;
            }
            return iconComponent;
          }
        })}
        tabBarStyle={{
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          alignItems: 'center',
        }}
        tabBarLabelStyle={{ fontSize: 12 }}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: 'green', 
            tabBarInactiveTintColor: '#19a337',
          }}
        />
        <Tab.Screen
          name={FarmName}
          component={FarmScreen}
          options={{
            tabBarActiveTintColor: 'green', 
            tabBarInactiveTintColor: '#19a337', 
          }}
        />
        <Tab.Screen
          name={ScanName}
          component={ScanScreen}
          options={{
            tabBarActiveTintColor: 'green', 
            tabBarInactiveTintColor: '#19a337', 
          }}
        />
        <Tab.Screen
          name={cashflowName}
          component={CashflowScreen}
          options={{
            tabBarActiveTintColor: 'green', 
            tabBarInactiveTintColor: '#19a337', 
          }}
        />
        <Tab.Screen
          name={AccountName}
          component={AccountScreen}
          options={{
            tabBarActiveTintColor: 'green', 
            tabBarInactiveTintColor: '#19a337', 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
