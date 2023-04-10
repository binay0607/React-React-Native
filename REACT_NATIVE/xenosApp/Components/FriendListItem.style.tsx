import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 3,

  },
  imgView: {
    flex: 1,
    marginLeft: 30,
    marginVertical: 15,
  },
  img: {
    width: '90%',
    height: 60,
    borderRadius: 20,
  },
  infoView: {
    flex: 3,
    marginLeft: 10,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  btn:{
    flex:1,
    borderColor: "dodgerblue",
    borderWidth: 4,
    height: "60%",
    marginRight: 10,
    marginTop:20,
    borderRadius: 10,
    width: "80%"
  },icon:{
    marginTop: 10,
    marginLeft: 15,
  }
});
export default styles;