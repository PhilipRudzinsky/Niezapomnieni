import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';

import QuizScreen from "./Quiz"
import VersusScreen from "./Versus"
import HistoryScreen from "./Info"
import StartGameScreen from "./StartGame";
import HomeScreen from "./Home";

const Tab = createMaterialBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <LinearGradient
        colors={['#F5F5DC', '#DEB887', '#D2B48C', '#D3D3D3']}
        style={{ flex: 1, flexDirection: 'row' }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const IconComponent = options.tabBarIcon;
          const color = state.index === index ? '#e91e63' : '#000';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <IconComponent color={color} size={26} />
              <Text style={{ color }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Versus"
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarLabel: 'Quiz',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="head-question-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Historia"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Historia',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}