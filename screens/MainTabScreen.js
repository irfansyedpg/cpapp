
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import HomeScreen from './HomeScreen'
import EarlyWarning from './EarlyWarning'
import DailySituation from './DailySituation'
import AssesmentResult from './AssesmentResult'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="black"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="HomeScreen"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor:'white',
               
                
                tabBarIcon: ({ color }) => (
                 
                    <MaterialCommunityIcons name="home" color={"#aeaeae"}  size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="EarlyWarning"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Early Warnings',
                tabBarColor:'white',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={"#aeaeae"} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={DailySituation}
            options={{
                tabBarLabel: 'Daily Situation',
                tabBarColor:'white',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="newspaper" color={"#aeaeae"} size={26} />
                ),
            }}
        />
             <Tab.Screen
            name="Assessment Results"
            component={AssesmentResult}
            options={{
                tabBarLabel: 'Assessment Result',
                tabBarColor:'white',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="chart-pie" color={"#aeaeae"} size={26} />
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
        <DetailsStack.Screen name="Details" component={EarlyWarning}

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