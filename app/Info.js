import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Dimensions} from "react-native";

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();
import JanCz from "./JanCz";
import Witold from "./Witold";
import JanSz from "./JanSz";
import Stefan from "./Stefan";

export default function HistoryScreen() {
  return (
      <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { fontSize: 11 },
            tabBarStyle: { backgroundColor: 'white' },
            tabBarContentContainerStyle: { marginTop: WindowHeight*0.02 },
          }}
      >
        <Tab.Screen
            name="Jan Szczepanik"
            component={JanSz}
            options={{ tabBarLabel: 'Jan \n Szczepaniak' }}
        />
        <Tab.Screen
            name="Jan Czochralski"
            component={JanCz}
            options={{ tabBarLabel: 'Jan Czochralski' }}
        />
        <Tab.Screen
            name="Witold Zglenicki"
            component={Witold}
            options={{ tabBarLabel: 'Witold Zglenicki' }}
        />
        <Tab.Screen
            name="Stefan Drzewiecki"
            component={Stefan}
            options={{ tabBarLabel: 'Stefan Drzewiecki' }}
        />
      </Tab.Navigator>
  );
}