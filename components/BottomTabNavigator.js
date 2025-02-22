import React, { use, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MyBooks from './MyBooks';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Khám phá'>
            <Tab.Screen
                name="Khám phá"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="book"
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Sách của tôi"
                component={MyBooks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="book-reader"
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}