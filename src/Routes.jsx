import { useContext } from 'react';
import Context from './Context/Context';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loader from './Components/Loader';

import CurrentTheme from './Themes';
import Config from './Config';
import Screens from './Screens';

const Stack = createStackNavigator();

function Route() {
  const { loader } = useContext(Context);


  return (
    <>
      { loader && <Loader /> }
      <NavigationContainer theme={CurrentTheme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Stack.Navigator screenOptions={Config} initialRouteName='Initial'>
          <Stack.Screen name="Initial" component={Screens.InitialSearch} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

export default Route;