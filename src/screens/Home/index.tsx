import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Box, Image, ScrollView, Text} from 'native-base';
import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Foods from './components/Foods';
import Search from './components/Search';
import Tabs from './components/Tabs';

const Home: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bg={'#EDEDED'}>
      <Box>
        <Box pl={'30px'} pt={'20px'}>
          <Text style={styles.title}>Delicious</Text>
          <Text style={styles.title}>food for you</Text>
        </Box>
        <Search />
        <Tabs />
        <Foods />
      </Box>
    </ScrollView>
  );
};

export const HomeHeaderLeft = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <Image
        marginLeft={6}
        source={require('@/assets/image/home/menu.png')}
        alt="Menu"
        size={6}
      />
    </TouchableOpacity>
  );
};

export const HomeHeaderRight = () => (
  <Image
    marginRight={6}
    size={6}
    source={require('@/assets/image/home/cart.png')}
    alt="Car"
  />
);

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
  },
});

export default Home;
