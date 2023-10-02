import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function TelaPrincipal({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.paragraph}>Welcome to the Home Screen</Text>
        <TouchableOpacity style={styles.touchable} onPress={()=> navigation.navigate("Details")}>Go to Details</TouchableOpacity>
      </View>
    );
  }

   function Details() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Details Screen</Text>
        <Text style={styles.paragraph}>Welcome to the Details Screen</Text>
      </View>
    );
  }

  function Contact() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.paragraph}>Welcome to the Contact Screen</Text>
      </View>
    );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main" 
      screenOptions={() => ({
       tabBarActiveTintColor: 'blue',
       tabBarInactiveTintColor: 'gray'
      })}>
         <Tab.Screen
          name="Home"
          component={TelaPrincipal}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" color={"blue"} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarIcon: () => (
              <Ionicons name="list" color={"blue"} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: () => (
              <Ionicons name="call" color={"blue"} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 25,
     textAlign: 'center',
  },

  paragraph: {
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
  },

   touchable: {
    margin: 5,
    fontFamily: 'Arial',
    color: '#4284f5',
    fontSize: 15,
    textAlign: 'center',
  },
});
