import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const CreateProfile = ({navigation}) => {
  
    return (
      <>
      {/* <View style={{width: '100%', backgroundColor: 'lightgrey', paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}><Text style={{fontSize: 20}}>Campus Recruitment System</Text></View> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{fontSize: 20, fontWeight: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={{marginBottom: 30, fontSize: 24, textAlign: 'left'}}>Campus Recruitment System</Text>
              
              <View style={{width: '90%', backgroundColor: 'lightgrey', padding: 10}}>
                <Text style={{fontSize: 15}}>Enter Name</Text>
                <TextInput  style={{width: '100%'}} placeholder='Enter name' textContentType='text' />
                <Text style={{fontSize: 15}}>Enter Email</Text>
                <TextInput style={{width: '100%'}} placeholder='Enter email' textContentType='emailAddress' />
                <Text style={{fontSize: 15}}>Enter Phone Number</Text>
                <TextInput style={{width: '100%'}} placeholder='Enter phone number' keyboardType='number-pad' />
                <Text style={{fontSize: 15}}>Enter CGPA</Text>
                <TextInput style={{width: '100%'}} placeholder='Enter CGPA' keyboardType='numeric' />
                <Text style={{fontSize: 15}}>Enter Resume Link</Text>
                <TextInput style={{width: '100%'}} placeholder='Enter resume link' textContentType='text' />
                <TouchableOpacity style={{display: 'flex'}}><Text style={{textAlign: 'center', fontSize: 18,backgroundColor: 'darkgrey', paddingTop: 4, paddingBottom: 4}} onPress={() => navigation.navigate("Student")}>Create Profile</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  export default CreateProfile;