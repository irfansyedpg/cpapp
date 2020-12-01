import React from 'react';
import { View, Text, Button, StyleSheet, StatusBarm, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeScreen = ({ navigation }) => {

  const { colors } = useTheme();



  const theme = useTheme();

  return (
    <View style={styles.container}>

      {/* Card Weather Starts */}
      <View style={styles.crWeather}>
        <View style={{ flex: 60, justifyContent: "center", alignContent: 'center', padding: 20 }}>
          <Text> To Day Weather </Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>21 °C </Text>
          <Text> Location </Text>
          <Text> Nov 11 </Text>
        </View>
        <View style={{ flex: 40, justifyContent: "center", alignContent: 'center', padding: 10 }}>
          <Image
            style={{ height: '60%', width: '90%' }}
            source={require('../assets/cloudy.png')}
          />
        </View>
      </View>

      {/* Card Main Cars starts */}
      <View style={styles.crReports}>
        <View style={styles.crCards}>
          <View style={[styles.leftCard, { backgroundColor: '#AED581' }]}></View>
          <View style={{ flex: 97 }}>
            <View style={{ flex: 1, flexDirection: 'row' }} >
              <View style={styles.mainCard} >
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>13</Text>
                <Text>Early Warnings Today</Text>
              </View>
              <View style={[styles.rightCard]} >
                <MaterialCommunityIcons name="warning" color='#AED581' size={50} />
              </View>
            </View>
          </View>
        </View>
        {/* Card Early  News Ends */}


        <View style={styles.crCards}>
          <View style={[styles.leftCard, { backgroundColor: '#948BFF' }]}></View>
          <View style={{ flex: 97 }}>
            <View style={{ flex: 1, flexDirection: 'row' }} >
              <View style={styles.mainCard} >
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>10</Text>
                <Text>Daily Situation</Text>
              </View>
              <View style={styles.rightCard} >
                <MaterialCommunityIcons name="newspaper" color='#948BFF' size={50} />
              </View>
            </View>
          </View>
        </View>
        {/* Card PDA News Ends */}

        <View style={styles.crCards}>
          <View style={[styles.leftCard, { backgroundColor: '#2BC8D8' }]}></View>
          <View style={{ flex: 97 }}>
            <View style={{ flex: 1, flexDirection: 'row' }} >
              <View style={styles.mainCard} >
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>200</Text>
                <Text> Risk Assesments Results </Text>
              </View>
              <View style={styles.rightCard} >
                <MaterialCommunityIcons name="golf-sharp" color='#2BC8D8' size={50} />
              </View>
            </View>
          </View>
        </View>

        {/* Card Risk Assesment Ends */}

      </View>

      {/* FLoating Button  */}

      <View style={{ flex: 10 }}>

      </View>


      <ActionButton buttonColor="#009387" bgColor={"white"} spacing={40}>

        <ActionButton.Item buttonColor='#9b59b6' title="Emergency Contact" onPress={() => console.log("notes tapped!")}>
          <Icon name="ios-call" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#FF5722' title="Damage Need Assessment" onPress={() => { }}>
          <Icon name="ios-checkmark-circle" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#00BCD4' title="Rapid Need Assessment" onPress={() => { }}>
          <Icon name="clipboard-sharp" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#FF9800' title="Report A Disaster " onPress={() => { }}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>

      </ActionButton>

    </View>



  );       //  // // // // // // // //
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 100,
    padding: 20,
    backgroundColor: '#FFFFFF'

  },
  crWeather: {

    flex: 30,
    flexDirection: 'row'
  },
  crReports: {

    flex: 60,
    marginTop: 10
  },

  // Main card CSS
  crCards: {
    flex: 50,
    justifyContent: "center",
    alignContent: 'center',


    flexDirection: 'row',
    marginTop: 5

  },
  leftCard: {
    backgroundColor: 'black',
    flex: 3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 20,


  },
  mainCard: {

    flex: 70,
    alignContent: 'center',
    padding: 10,
    justifyContent: "center"
  },
  rightCard: {

    flex: 30,
    justifyContent: 'center',
    padding: 10
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',

  },
});
