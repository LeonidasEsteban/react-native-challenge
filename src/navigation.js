import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import UserListScreen from './screens/UserList';
import UserDetailScreen from './screens/UserDetail';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS': {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

const Stack = createStackNavigator();
const Navigation = () => {
  console.log('state', store.getState());
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          // headerMode="none"
          mode="card"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="UserList" component={UserListScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default memo(Navigation);
