import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import User from '../components/user';
import { useSelector, useDispatch } from 'react-redux';

const UserList = ({ navigation, ...props }) => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  console.log(users);

  // const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch({
          type: 'SET_USERS',
          payload: data.data,
        });
        // setUsers(data.data);
        // console.log('users', data.data);
      });
  }, [dispatch]);

  return (
    <ViewContainer>
      <SafeAreaView>
        {users.map(user => (
          <User {...user} key={user.id} navigation={navigation} />
        ))}
      </SafeAreaView>
    </ViewContainer>
  );
};

export default UserList;
