
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#fff"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="HomeScreen"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="DetailScreen"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Disaster Profile',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Disaster News',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
             <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Early Warning',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>

);

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'normal'
            }
        }}>

        <HomeStack.Screen name="Home" component={HomeScreen}

            options={{

                title: 'Overview',
                headerLeft: () => (

                    <Icon.Button

                        name="ios-menu" size={25}
                        backgroundColor="#009387"
                        onPress={() => { navigation.openDrawer() }}> </Icon.Button>
                )
            }}

        />

    </HomeStack.Navigator>
);


const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
        screenOptions={{

            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }

        }

        }

    >
        <DetailsStack.Screen name="Details" component={DetailScreen}

            options={{

                title: 'Detail',
                headerLeft: () => (

                    <Icon.Button

                        name="ios-menu" size={25}
                        backgroundColor="#009387"
                        onPress={() => { navigation.openDrawer() }}> </Icon.Button>


                )



            }}
        />

    </DetailsStack.Navigator>
);

export default MainTabScreen