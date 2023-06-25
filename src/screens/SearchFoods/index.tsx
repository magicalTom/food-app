import {useNavigation} from '@react-navigation/native';
import {ArrowBackIcon, Box, Input, StatusBar, Text} from 'native-base';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

const SearchFoods: React.FC = () => {
  return (
    <Box>
      <StatusBar backgroundColor={'red'} />
      <Text>Search Foods</Text>
    </Box>
  );
};

export default SearchFoods;

export const SearchFoodsHeaderLeft = () => {
  const navigation = useNavigation();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handleBack} activeOpacity={1}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};

export const SearchFoodsHeader = () => {
  return (
    <Box w={'90%'}>
      <Input
        borderWidth={0}
        _focus={{
          borderWidth: 0,
          backgroundColor: 'none',
        }}
        fontSize={17}
        fontWeight={600}
        placeholder="Search foods"
        autoFocus
      />
    </Box>
  );
};
