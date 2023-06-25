import {Image} from 'native-base';
import React from 'react';

export type HomeTabIconProps = {
  focused: boolean;
};

const HomeTabIcon: React.FC<HomeTabIconProps> = ({focused}) => {
  if (focused) {
    return (
      <Image
        size={30}
        source={require('@/assets/image/tabBar/home_active.png')}
        alt="home"
      />
    );
  }
  return (
    <Image
      size={30}
      source={require('@/assets/image/tabBar/home.png')}
      alt="home"
    />
  );
};

export default HomeTabIcon;
