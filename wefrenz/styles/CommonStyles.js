import { StyleSheet } from 'react-native'
  
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  },
  input: {
    width: 280,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.15)',
    textAlign: 'center',
    marginBottom: 10
  },
  txt: {
    marginBottom: 10,
    color: '#2b90d9',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
  },
  button: {
      backgroundColor: '#2b90d9',
      borderRadius: 5,
      width: 90,
      padding: 3,
      alignItems: 'center',
      marginBottom: 10,
      margin: 5
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold'
  },
  btnGrp: {
    flexDirection: 'row'
  },
  whiteFonts: {
    color: '#fff'
  },
  faIcon: {
    
  },
  rotateLeft: {
    transform: [{ rotate: '180deg'}]
  },
  rtSpc: {
    marginRight: 5
  },
  ltSpc: {
    marginLeft: 5
  }
});
  
 const buttons = StyleSheet.create({ 
   primary: {                        
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })
  
 export { styles, buttons }    