import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {





    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: "../assests/irfan.jpeg"
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Irfan Syed</Title>
                                <Caption style={styles.caption}>0343-2233333</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>

                        </View>
                    </View>


                    




                    <Drawer.Section style={styles.drawerSection} title=".">
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-group"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Community Outreach"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="axis-arrow"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Volunteer Mapping"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />



                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="barn"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Near Evacuation Center"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alarm-light"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Emergency Contacts"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />

                    </Drawer.Section>


                    <Drawer.Section title="MIRA ASSESSMENTS">


                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="tooltip-edit"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Tool1"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="tooltip-edit-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Tool2"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection} title="Settings">
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="User Profile "
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="image-filter-center-focus-weak"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"

                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
