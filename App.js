// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainTablScreen from './screens/MainTabScreen'
import {  DrawerContent} from './screens/DrawerContent'




const Drawer = createDrawerNavigator();
function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
                <Drawer.Screen name="Home" component={MainTablScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;