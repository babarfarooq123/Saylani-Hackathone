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
  Button
} from 'react-native';

const Student = ({navigation}) => {
    const [check, setCheck] = useState(0);
  
    return (
      <>
      {/* <View style={{width: '100%', backgroundColor: 'lightgrey', paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}><Text style={{fontSize: 20}}>Campus Recruitment System</Text></View> */}
        <View style={{marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title='Create Profile' onPress={() => navigation.navigate("CreateProfile")} style={{marginTop: 10}} />
            <Button title='View Vacancies' onPress={() => navigation.navigate('ViewVacancy')} style={{width: '80%'}} />
        </View>
      </>
    );
  };

  export default Student;