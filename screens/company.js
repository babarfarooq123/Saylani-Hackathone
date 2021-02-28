import React, {useState} from 'react';
import {
  SafeAreaView,
//   StyleSheet,
//   ScrollView,
  View,
  Text,
//   StatusBar,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TouchableOpacity,
  FlatList
} from 'react-native';

const Item = ( title ) => (
    <View style={{backgroundColor: 'lightgrey', borderRadius: 10, padding: 10, margin: 10}}>
      {/* <Text>{title.title}</Text> */}
      <Text>{title.name}</Text>
      <Text>{title.desc}</Text>
    </View>
);

const Company = ({navigation}) => {
    const [data, setData] = useState([
    {'id':1, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 2, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 3, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 4, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 5, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 6, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 7, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'},
    {'id': 8, 'name': 'Company Name', 'desc': 'So here is the description of the vacancy'}]);

    const renderItem = ({ item }) => (
        <Item title={item.id} name={item.name} desc={item.desc} />
    );
  
    return (
      <>
      {/* <View style={{width: '100%', backgroundColor: 'lightgrey', paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}><Text style={{fontSize: 20}}>Campus Recruitment System</Text></View> */}
        

        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
      </>
    );
  };

  export default Company;