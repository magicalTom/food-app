import {StackActions, useNavigation} from '@react-navigation/native';
import {Box, Input, SearchIcon} from 'native-base';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

const InputLeftElement = () => (
  <Box ml={'35px'}>
    <SearchIcon size={'20px'} />
  </Box>
);

const Search: React.FC = () => {
  const navigation = useNavigation();

  const handleSearch = useCallback(() => {
    navigation.dispatch(StackActions.push('SearchFoods'));
  }, [navigation]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleSearch}>
      <Box paddingX={'30px'} mt={'28px'}>
        <Input
          placeholder="Search"
          variant={'rounded'}
          InputLeftElement={<InputLeftElement />}
          backgroundColor={'#EFEEEE'}
          borderWidth={0}
          _focus={{
            backgroundColor: '#EFEEEE',
            borderColor: '#EFEEEE',
          }}
          fontSize={17}
          fontWeight={600}
          lineHeight={20}
          isReadOnly
          p={'20px'}
          size={'2xl'}
          onPressOut={handleSearch}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Search;
