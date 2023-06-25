import {
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const Foods: React.FC = () => {
  const data = useRef([
    {
      uri: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Veggie tomato mix',
      price: 'N1,900',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2017/12/01/16/14/cookies-2991174_1280.jpg',
      title: 'Veggie tomato mix',
      price: 'N1,900',
    },
  ]);

  return (
    <ScrollView horizontal mt={'64px'} showsHorizontalScrollIndicator={false}>
      <HStack paddingX={'17px'} paddingBottom={'40px'}>
        {data.current.map((item, index) => (
          <TouchableOpacity activeOpacity={1} key={index}>
            <VStack
              w={'220px'}
              h={'321px'}
              position={'relative'}
              marginX={'17px'}>
              <Box zIndex={9}>
                <Center>
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    alt="food"
                    height={'164px'}
                    width={'164px'}
                    borderRadius={'full'}
                    zIndex={9}
                  />
                </Center>
                <Center mt={'30px'}>
                  <Text
                    fontWeight={600}
                    fontSize={22}
                    textAlign={'center'}
                    maxW={'120px'}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    flexWrap={'wrap'}>
                    {item.title}
                  </Text>
                </Center>
                <Center>
                  <Text
                    color={'#FA4A0C'}
                    fontWeight={700}
                    fontSize={17}
                    mt={15}>
                    {item.price}
                  </Text>
                </Center>
              </Box>
              <Box
                position={'absolute'}
                bgColor={'#ffffff'}
                left={0}
                bottom={0}
                w={'100%'}
                h={'270px'}
                borderRadius={'30px'}
                style={styles.shadow}
              />
            </VStack>
          </TouchableOpacity>
        ))}
      </HStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(26, 26, 26, 0.126)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
  },
});

export default Foods;
