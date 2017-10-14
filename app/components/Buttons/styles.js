import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    justifyContent: 'center',
    flex: .4,
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
