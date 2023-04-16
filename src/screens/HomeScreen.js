/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import {sliderData, freeGames, paidGames} from '../model/data';
import Banner from '../components/Banner';
import Carousel from 'react-native-snap-carousel';
import CustomSwitch from '../components/CustomSwitch';
import GenericListItem from '../components/GenericListItem';

export default function HomeScreen({navigation}) {
  const [gameTab, setGameTab] = useState(1);

  // const handleSelectSwitch = value => {
  //     setGamesTab(value);
  // };

  const renderBanner = ({item, index}) => {
    return <Banner data={item} />;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
            // marginRight: 20,
            // marginBottom: 10,
            // marginTop: 20,
          }}>
          <Text style={{fontSize: 15, fontWeight: 600}}>Hello Prashant</Text>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{width: 35, height: 35, borderRadius: 40}}
          />
        </View>
        <TextInput
          style={{
            height: 32,
            marginLeft: 20,
            marginRight: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderWidth: 1,
            borderColor: '#c6c6c6',
            borderRadius: 6,
          }}
          placeholder="Search"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 15, fontWeight: 600}}>Upcoming Movies</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0adaa8', fontSize: 12}}> See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={360}
          itemWidth={300}
        />

        {/* <View style={{ margin: 20, display: 'flex', justifyContent: 'center' }}> */}
        <CustomSwitch
          {...{
            gameTab,
            setGameTab,
          }}
        />
        {/* </View> */}

        {gameTab === 1 && (
          <View style={{marginLeft: 20, marginRight: 20}}>
            {freeGames.map(item => (
              <GenericListItem
                key={item.id}
                item={item}
                onPress={() =>
                  navigation.navigate('GameDetails', {
                    title: item.title,
                    id: item.id,
                  })
                }
              />
            ))}
          </View>
        )}
        {gameTab === 2 && (
          <View style={{marginLeft: 20, marginRight: 20}}>
            {paidGames.map(item => (
              <GenericListItem
                key={item.id}
                item={item}
                onPress={() =>
                  navigation.navigate('GameDetails', {
                    title: item.title,
                    id: item.id,
                  })
                }
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
