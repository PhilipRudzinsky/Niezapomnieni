import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import QuizScreen from "./Quiz"
import VersusScreen from "./Versus"
import HistoryScreen from "./Info"

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Versus"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="Versus"
                component={VersusScreen}
                options={{
                    tabBarLabel: 'Versus',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="sword-cross" color={color} size={26} />
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