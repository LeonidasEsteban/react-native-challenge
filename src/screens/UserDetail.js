import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import { useSelector } from 'react-redux';

const UserDetail = ({ navigation, route }) => {
  /**
   * User's id from navigation param
   */
  const { id } = route.params;
  const users = useSelector(state => state.users);
  const user = users.find(item => {
    if (item.id === id) {
      return true;
    }
  });
  // debugger;
  // console.log('user', user);

  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       setUser(data.data);
  //       // console.log('users', data.data);
  //     });
  // }, [id]);

  return (
    <ViewContainer>
      <SafeAreaView>
        <Text>
          Detalle del usuario {id} {user.first_name}
        </Text>
      </SafeAreaView>
    </ViewContainer>
  );
};

export default UserDetail;
