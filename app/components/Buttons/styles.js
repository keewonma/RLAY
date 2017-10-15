import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    justifyContent: 'space-around',
    flex: 1,
  //  alignItems: 'flex-start',
  },
  icon: {
    flex: .3,
    //marginRight: 5,
    //marginLeft: 5,
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'space-around',
  },
  icon2: {
    flex: .3,
    //marginRight: 5,
    //marginLeft: 5,
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'space-around'
  },
  icon3: {
    flex: .3,
    //marginRight: 5,
    //marginLeft: 5,
    width: imageWidth,
    height: imageHeight,
    justifyContent: 'space-around'
  },

});
