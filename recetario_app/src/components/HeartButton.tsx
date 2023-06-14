import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeartButton: React.FC<{onPress: () => void; filled: boolean}> = ({
  onPress,
  filled,
}) => {
  const iconName = filled ? 'heart' : 'heart-o';

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={25} color={filled ? '#FF0000' : 'white'} />
    </TouchableOpacity>
  );
};

export default HeartButton;
