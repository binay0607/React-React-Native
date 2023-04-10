import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 280,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    overflow: 'hidden',
    
  },

  maxLine:{
    position: 'absolute',
    width: "100%",
    top: 44,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    
  },
  mtext:{
    marginHorizontal:10,
    fontSize: 15

  },
  pointsView:{
    position: 'absolute',
    width: 80,
    height: 50,
    left: "40%",
    top:"10%",
    justifyContent:'center',
    alignItems:'center',

  },
  ptext:{
    color:"white",
    fontSize: 30,
    fontWeight: 'bold'
  }
});
export default styles;
