import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#000000"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="What do you want to eat?"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

export default SearchBar;
