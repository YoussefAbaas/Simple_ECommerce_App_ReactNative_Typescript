import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    marginTop: 20,
    marginHorizontal: 7,
  },
  imageStyle: {
    width: '100%',
    height: 256,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    lineHeight: 27,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: '#9C9C9C',
    lineHeight: 27,
  },
  icon: {},
  iconContainer: {
    position: 'absolute',
    zIndex: 999,
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
