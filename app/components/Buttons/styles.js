import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width  ;
const imageHeight = Dimensions.get('window').height/4  ;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: imageHeight,
  },
  wrapper: {
    justifyContent: 'center',
    flex: 1,
  //  alignItems: 'flex-start',
  },
  icon: {
    flex: 1,
    //marginRight: 5,
    //marginLeft: 5,
    width: imageWidth,
    height: imageHeight,
  },

});
