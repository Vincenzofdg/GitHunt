import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CurrentTheme from './Themes';
import Config from './Config';
import Screens from './Screens';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer theme={CurrentTheme}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={Config} initialRouteName='Initial'>
        <Stack.Screen name="Initial" component={Screens.InitialSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;