import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  imageStyle: {
    width: Dimensions.get('screen').width,
    height: 400,
    alignSelf: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  titleStyle: {
    fontWeight: '500',
    color: '#444444',
    fontSize: 20,
  },
  priceStyle: {
    fontWeight: '600',
    color: '#444444',
    fontSize: 20,
  },
  choiceTitle: {
    fontWeight: '500',
    color: '#444444',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
  },
  choiceContainer: {
    flexDirection: 'row',
    gap: 10,
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
  focusedColorContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
  },
});
