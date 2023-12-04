import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {mainStyles} from '../../global-styles/global-styles';
import VirtualizedView from '../../helpers/virtualized-view';
import Splash from '../../components/common/splash';
import check from '../../assets/check.svg';

console.log(check, 8888);
const HomeScreen = props => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <View style={[mainStyles.mainContainer, {paddingHorizontal: 0}]}>
      {load && <Splash />}
      <VirtualizedView>
        <View style={mainStyles.titleBlock}>
          <Text style={mainStyles.secondTitle}>ОБЩАЯ ЧАСТЬ</Text>
        </View>

        <View style={{backgroundColor: 'blue'}}>
          <Image source={check} alt={'check'} width={200} />
        </View>

        <View style={mainStyles.titleBlock}>
          <Text style={mainStyles.secondTitle}>ОСОБЕННАЯ ЧАСТЬ</Text>
        </View>

        <View></View>
      </VirtualizedView>
    </View>
  );
};

export default HomeScreen;
