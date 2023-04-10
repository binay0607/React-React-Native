import {StyleSheet} from 'react-native';
 const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    height: 170,
    marginTop: 20,
    width: '90%',
  },
  imgContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    marginLeft: 10,
  },
  img: {
    height: '100%',
    width: '100%',
  },

  text: {
    color: 'white',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnView: {
    flexDirection: 'row',
    marginLeft: 0,
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-around',
  },
  btn: {
    height: 65,
    width: 65,
    borderColor: 'dodgerblue',
    borderWidth: 4,
    borderRadius: 12,
    justifyContent:'center',
    alignItems: 'center',
  },
  
});
export default styles;
