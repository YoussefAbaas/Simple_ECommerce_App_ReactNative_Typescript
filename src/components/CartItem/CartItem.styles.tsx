import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: 95,
    height: 125,
    borderRadius: 20,
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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
  sizeText: {
    fontWeight: '500',
    color: '#444444',
    fontSize: 18,
  },
  sizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  colorChoice: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  choicesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  infoContainer: {
    justifyContent: 'space-between',
  },
  rightCart: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'flex-end',
  },
});
