import React, { useState } from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
interface SearchProps {
  onLocationSelected: (data: any, detail: any) => void;
}

const Search: React.FC<SearchProps> = ({ onLocationSelected }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
  <GooglePlacesAutocomplete
    placeholder="Para onde?"
    onPress={onLocationSelected}
    query={{
      // @ts-ignore
      key: process.env.API_GOOGLEMAPS,
      language: 'pt',
      components: 'country:br'
    }}
    textInputProps={{
      onFocus: () => { setSearchFocused(true) },
      onBlur: () => { setSearchFocused(false) },
      autoCapitalize: 'none',
      autoCorrect: false
    }}
    fetchDetails
    enablePoweredByContainer={false}
    styles={{
      container: styles.container,
      textInputContainer: styles.textInputContainer,
      textInput: styles.textInput,
      listView: styles.listView,
      description: styles.description,
      row: styles.row
    }}
  
  />
  )
}

export default Search;