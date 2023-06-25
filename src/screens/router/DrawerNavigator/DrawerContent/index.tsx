import {Box, HStack, PlayIcon, Text} from 'native-base';
import React from 'react';

const DrawerContent: React.FC = () => {
  return (
    <Box>
      <HStack alignItems={'flex-start'} w={'full'}>
        <Box mt={'6px'} mr={'10px'}>
          <PlayIcon color={'white'} />
        </Box>
        <Box
          borderBottomColor={'white'}
          borderBottomWidth={'1px'}
          pb={'10px'}
          flex={1}>
          <Text color={'white'} fontSize={'20px'} fontWeight={'bold'}>
            Profile
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default DrawerContent;
