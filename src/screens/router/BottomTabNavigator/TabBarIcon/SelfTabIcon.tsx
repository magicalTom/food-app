import {Image} from 'native-base';
import React from 'react';

export type SelfTabIconProps = {
  focused: boolean;
};

const SelfTabIcon: React.FC<SelfTabIconProps> = ({focused}) => {
  if (focused) {
    return (
      <Image
        size={30}
        source={require('@/assets/image/tabBar/person_active.png')}
        alt="person"
      />
    );
  }
  return (
    <Image
      size={30}
      source={require('@/assets/image/tabBar/person.png')}
      alt="person"
    />
  );
};

export default SelfTabIcon;
