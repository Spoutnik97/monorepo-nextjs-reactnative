import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // @react-navigation
import { createStackNavigator } from '@react-navigation/stack'; // @react-navigation
import { useStopStartupTrace } from 'react-native-startup-trace'; // @firebase-perf
import { Home, Login, CheatCodes } from '../pages';
import { StorybookUIRoot } from '../../storybook'; // @storybook

export type RootStackParamList = {
  Home: undefined;
  Login?: { userId: string };
  CheatCodes: undefined;
  Storybook: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  /**
   * @firebase-perf ideally move me to your initial screens
   * to stop the trace when your first screen is fully mounted
   */
  useStopStartupTrace();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="Login"
          component={Login}
          initialParams={{ userId: 'test_user_id' }}
        />
        <RootStack.Screen name="CheatCodes" component={CheatCodes} />
        <RootStack.Screen name="Storybook" component={StorybookUIRoot} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
