import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Map: {
            screens: {
              Map: 'map'
            }
          },
          Profile: {
            screens: {
              Profile: 'profile'
            }
          },
          Evaluation: {
            screens: {
              Evaluation: 'evaluation'
            }
          },
        },
      },
      NotFound: '*',
    },
  },
};
