//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet,PermissionsAndroid, Platform } from 'react-native';
import { Route } from './src/Navigation/Route';
import { notificationListeners, requestUserPermission } from './src/utils/notificationServices';


const App = () => {

useEffect(()=>{

  if(Platform.OS == 'android'){
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res)=>{
        console.log("res+++++",res)
        if(!!res && res == 'granted'){
          requestUserPermission()
          notificationListeners()
        }
    }).catch(error=>{
      alert('something wrong')
    })
  }else{

  }

},[])


  return (
    <View style={styles.container}>
        <Route />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});

//make this component available to the app
export default App;
