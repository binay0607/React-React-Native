import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chartContainer: {
    height: '96%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 6,
  },
  label: {
    color: 'white',
    textAlign: 'center',
    borderTopColor: 'white',
    marginBottom: 3,
  },
  bar: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    height: '80%',
    width: '100%',
    marginBottom: 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  barFill: {
    backgroundColor: 'dodgerblue',
    width: '30%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginHorizontal: 3,
  },
});
export default styles;