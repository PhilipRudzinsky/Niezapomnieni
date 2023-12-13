import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/Tabs.js';
import JEBANY from './app/PIZDA.js';
import * as Updates from 'expo-updates';


const Stack = createStackNavigator();

export default function App() {

    useEffect(() => {
        const updateApp = async () => {
            try {
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    await Updates.fetchUpdateAsync();
                    await Updates.reloadAsync();
                }
            } catch (e) {
                console.log(e);
            }
        };

        updateApp();
    }, []);

    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={MyTabs}
                options={{
                    header: () => null,
                }}
            />

               <Stack.Screen
                            name="PIZDA"
                            component={JEBANY}
                            options={{
                                header: () => null,
                            }}
                        />

        </Stack.Navigator>
        </NavigationContainer>
    );
}
