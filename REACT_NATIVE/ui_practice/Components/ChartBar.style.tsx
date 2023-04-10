import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chartContainer: {
    height: '96%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barFill: {
    backgroundColor: 'dodgerblue',
    width: '40%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});
export default styles;