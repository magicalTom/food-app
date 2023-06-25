import {Image} from 'native-base';
import React from 'react';

export type FavoriteTabIconProps = {
  focused: boolean;
};

const FavoriteTabIcon: React.FC<FavoriteTabIconProps> = ({focused}) => {
  if (focused) {
    return (
      <Image
        size={30}
        source={require('@/assets/image/tabBar/favorite_active.png')}
        alt="favorite"
      />
    );
  }
  return (
    <Image
      size={30}
      source={require('@/assets/image/tabBar/favorite.png')}
      alt="favorite"
    />
  );
};

export default FavoriteTabIcon;
