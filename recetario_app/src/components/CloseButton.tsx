import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CloseButton: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="times" size={25} color="white" />
    </TouchableOpacity>
  );
};

export default CloseButton;
