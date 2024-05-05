import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  priceTitle: {
    color: '#757575',
    fontSize: 18,
    fontWeight: '500',
  },
  priceValue: {
    color: '#757575',
    fontSize: 18,
    fontWeight: '600',
  },
  grandTotalPrice: {
    color: '#3C3C3C',
  },
});
