import {Button, View, useToast} from 'native-base';
import React, {useCallback} from 'react';

const Favorite: React.FC = () => {
  const toast = useToast();

  const handleAlert = useCallback(() => {
    toast.show({description: 'Toast'});
  }, [toast]);

  return (
    <View>
      <Button onPress={handleAlert}>Alert</Button>
    </View>
  );
};

export default Favorite;
