import {Image} from 'native-base';
import React from 'react';

export type HistoryTabIconProps = {
  focused: boolean;
};

const HistoryTabIcon: React.FC<HistoryTabIconProps> = ({focused}) => {
  if (focused) {
    return (
      <Image
        size={30}
        source={require('@/assets/image/tabBar/history_active.png')}
        alt="history"
      />
    );
  }
  return (
    <Image
      size={30}
      source={require('@/assets/image/tabBar/history.png')}
      alt="history"
    />
  );
};

export default HistoryTabIcon;
