/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const activityArray = [
  {
    type: 'Transfer',
    from: 'Dobleh',
    amount: 1.14,
    status: 'success',
    time: '05:23 pm',
  },
  {
    type: 'Withdrawl',
    to: 'BCA',
    amount: 400,
    status: 'failure',
    time: '10:25 am',
  },
  {
    type: 'Payroll',
    from: 'Tkpdesgn',
    amount: 900,
    status: 'success',
    time: 'Jun 10, 2020',
  },
  {
    type: 'Transfer',
    from: 'Dobleh',
    amount: 1.14,
    status: 'success',
    time: 'May 10, 2020',
  },
  {
    type: 'Withdrawl',
    to: 'BCA',
    amount: 400,
    status: 'success',
    time: 'Apr 10, 2020',
  },
  {
    type: 'Payroll',
    from: 'Tkpdesgn',
    amount: 900,
    status: 'success',
    time: 'Mar 10, 2020',
  },
];
const cardRenderItem = ({item}) => (
  <View
    style={{
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height: 200,
      width: 300,
      backgroundColor: '#644D9D',
      margin: 10,
      borderRadius: 30,
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    <Image
      resizeMode="cover"
      style={{height: 80, width: 220}}
      source={require('./assets/dobzin.jpg')}
    />
    <Text style={{color: '#ffffff'}}>You can get upto 30% cashback</Text>
    <TouchableOpacity
      onPress={() => {}}
      style={{
        height: 50,
        width: 80,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      }}>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: 1,
        }}>
        Pay
      </Text>
    </TouchableOpacity>
  </View>
);

const activityCard = (activity, i) => (
  <View
    key={i}
    style={{
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          backgroundColor:
            activity.status === 'failure'
              ? 'rgba(255, 50, 50, 0.5)'
              : 'rgba(0, 175, 128, 0.5)',
        }}>
        <Image
          style={{
            height: 25,
            width: 25,
            transform: [
              {rotateZ: activity.type === 'Withdrawl' ? '45deg' : '225deg'},
            ],
          }}
          source={
            activity.status === 'failure'
              ? require('./assets/arrowFailure.png')
              : require('./assets/arrowSuccess.png')
          }
        />
      </View>
    </View>
    <View style={{flex: 3}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
        {activity.type + ' '}
        {activity.type === 'Withdrawl' ? 'to ' : 'from '}
        {activity.type === 'Withdrawl' ? activity.to : activity.from}
      </Text>
      <Text style={{color: 'grey'}}>{activity.time}</Text>
    </View>
    <View style={{flex: 2, alignItems: 'flex-end'}}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: activity.status === 'success' ? '#00AF80' : '#FF3232',
        }}>
        {activity.type === 'Withdrawl' ? '-' : '+'} ₹ {activity.amount}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: activity.status === 'success' ? '#00AF80' : '#FF3232',
        }}>
        {activity.status === 'failure' ? 'Failed/Cancelled' : 'Successful'}
      </Text>
    </View>
  </View>
);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* main container */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          {/* profile header */}
          <View
            style={{
              // height: 100,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            {/* info */}
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'grey',
                  fontStyle: 'italic',
                }}>
                Welcome
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Sunil Kumar
              </Text>
            </View>
            {/* profile pic */}
            <View>
              <Image
                style={{borderRadius: 18, height: 50, width: 50}}
                source={require('./assets/avatar.png')}
              />
            </View>
          </View>
          {/* balance container */}
          <View
            style={{
              height: 180,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 60,
            }}>
            {/* folder icon */}
            <View>
              <Image
                style={{height: 40, width: 40}}
                source={require('./assets/wallet.png')}
              />
            </View>
            {/* amount */}
            <View>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>₹ 44.48</Text>
              <Text style={{color: 'grey'}}>Available Balance</Text>
            </View>
            {/* add rupee icon */}
            <TouchableOpacity>
              <Image
                style={{height: 40, width: 40}}
                source={require('./assets/add.png')}
              />
            </TouchableOpacity>
          </View>
          {/* horizontal card container */}
          <View style={{padding: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={['1', '2', '3', '4', '5']}
              renderItem={cardRenderItem}
              keyExtractor={(item) => item}
            />
          </View>
          {/* activity conatiner */}
          <View style={{padding: 20}}>
            {/* activity header */}
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
                Your Activity
              </Text>
              <Text style={{color: 'grey'}}>09 July 2020</Text>
            </View>
            {activityArray.map(activityCard)}
          </View>
        </View>
      </ScrollView>
      {/* bottom tab */}
      <View
        style={{
          paddingBottom: 15,
          position: 'absolute',
          bottom: 0,
          maxHeight: 80,
          width: Dimensions.get('screen').width,
          borderTopWidth: 1,
          borderTopColor: 'grey',
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={require('./assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={require('./assets/home.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 60,
            width: 120,
            borderWidth: 1,
            borderTopColor: '#ffffff',
            borderLeftColor: 'grey',
            borderBottomColor: 'grey',
            borderRightColor: 'grey',
            borderBottomLeftRadius: 61,
            borderBottomRightRadius: 61,
            marginBottom: 8,
            backgroundColor: '#ffffff',
            // padding: 10,
          }}>
          <View
            style={{
              height: 58,
              width: 118,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: -6,
              borderBottomLeftRadius: 61,
              borderBottomRightRadius: 61,
              backgroundColor: '#ffffff',
            }}>
            <View
              style={{
                height: 70,
                width: 70,
                borderColor: 'grey',
                borderRadius: 40,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                marginBottom: 8,
              }}>
              <Image
                style={{height: 25, width: 25}}
                source={require('./assets/homeSelected.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={require('./assets/home.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
