import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: Platform.select({ ios: 60, android: 40 }),
    width: '100%'
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 54,
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 5,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  textInput: {
    fontFamily: 'Poppins_300Light',
    height: 54,
    margin: 0,
    borderRadius: 3,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0, height: 0
    },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd'

  },
  listView: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0, height: 0
    },
    shadowRadius: 15,
    borderRadius: 3,
  },
  description: {
    fontSize: 14,
  },
  row: {
    padding: 20,
    height: 58
  }

});

export default styles;