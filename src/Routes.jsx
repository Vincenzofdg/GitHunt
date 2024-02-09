import { useContext } from 'react';
import Context from './Context/Context';
import { StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Component from './Components';
import Images from './assets'

import CurrentTheme from './Themes';
import Config from './Config';
import Screens from './Screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainMenu = () => {
  const icon = (name) => {
    const css = {width: 35, height: 35};
    return (
      <Image 
        source={Images[name]} 
        style={css}
      />
    )
  }

  return (
    <Tab.Navigator initialRouteName='Search' screenOptions={Config.tab} >
      <Tab.Screen name="History" component={Screens.History} options={{ tabBarIcon: () => icon('History') }} />
      <Tab.Screen name="Search" component={Screens.Search} options={{ tabBarIcon: () => icon('Search') }} />
      <Tab.Screen name="Saved" component={Screens.Saved} options={{ tabBarIcon: () => icon('Folder') }} />
    </Tab.Navigator>
  )
}

function Route() {
  const { loader, theme } = useContext(Context);

  return (
    <>
      { loader && <Component.Loader /> }
      <NavigationContainer theme={CurrentTheme[theme]}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Stack.Navigator screenOptions={Config.stack} initialRouteName='Initial'>
          <Stack.Screen name="Initial" component={Screens.Initial} />
          <Stack.Screen name="User" component={Screens.User} />

          <Stack.Screen name="WebRepo" component={Screens.WebPage} />

          <Stack.Screen name="TabMenu" component={MainMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Route;