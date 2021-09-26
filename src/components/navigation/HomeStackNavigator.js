import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';

const HomeStack = createStackNavigator();

function HomeStackNavigator(){
    return(

    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="Details" component={Details}/>
    </HomeStack.Navigator>
        )
}

export default HomeStackNavigator;
