import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {LoginButton, AccessToken, Profile} from 'react-native-fbsdk-next';

export const Authentication = () => {
  const [userInfo, setUserInfo] = useState('');

  console.log('Info', userInfo);

  const initUser = token => {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' +
        token,
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);

          const FN = json.first_name;
          console.log('First Name ' + FN);

          const LN = json.last_name;
          console.log('Last Name ' + LN);
        });
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
      });
  };

  return (
    <View>
      <LoginButton
        publishPermissions={['publish_actions']}
        readPermissions={['public_profile']}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ', result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log('Here is Data', data);
              const {accessToken} = data;
              initUser(accessToken);
            });
          }
        }}
        onLogoutFinished={() => {
          console.log('Logout');
        }}
      />
      <View>
        <Text>{userInfo}</Text>
      </View>
    </View>
  );
};
