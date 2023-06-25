import {Box, HStack, ScrollView, Text, VStack} from 'native-base';
import React, {useCallback, useRef, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';

const output = (n: number) => n * 87;

const Tabs: React.FC = () => {
  const data = useRef(['Foods', 'Drinks', 'Drinks', 'Drinks', 'Drinks']);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(0);

  const marginLeft = fadeAnim.interpolate({
    inputRange: data.current.map((_, index) => index),
    outputRange: data.current.map((_, index) => output(index)),
  });

  const handleActive = useCallback(
    (index: number) => () => {
      Animated.timing(fadeAnim, {
        toValue: index,
        useNativeDriver: false,
        duration: 200,
      }).start();
      setActive(index);
    },
    [fadeAnim],
  );

  return (
    <ScrollView
      mt={'46px'}
      w={'full'}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <VStack paddingX={'30px'}>
        <HStack>
          {data.current.map((item, index) => (
            <TouchableOpacity
              onPress={handleActive(index)}
              activeOpacity={1}
              key={index}>
              <Text
                fontSize={17}
                textAlign={'center'}
                lineHeight={20}
                minWidth={'87px'}
                color={active === index ? '#FA4A0C' : '#9A9A9D'}
                key={index}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </HStack>

        <Animated.View style={{marginLeft: marginLeft}}>
          <Box height={'2px'} bgColor={'#FA4A0C'} width={'80px'} mt={'10px'} />
        </Animated.View>
      </VStack>
    </ScrollView>
  );
};

export default Tabs;
