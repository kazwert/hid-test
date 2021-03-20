import { NativeModules, Platform } from 'react-native';

const RCTToast = Platform.select({
    ios: NativeModules.LRDRCTSimpleToast,
    android: require('react-native').ToastAndroid,
});

export default {
    // Toast duration constants
    SHORT: RCTToast.SHORT,
    LONG: RCTToast.LONG,

    // Toast gravity constants
    TOP: RCTToast.TOP,
    BOTTOM: RCTToast.BOTTOM,
    CENTER: RCTToast.CENTER,

    show(
      message: string,
      duration?: number,
      viewControllerBlacklist?: Array<string>
    ) {
        RCTToast.show(
          message,
          duration === undefined ? RCTToast.SHORT : duration,
          viewControllerBlacklist
        );
    },

    showWithGravity(
      message: string,
      duration: number,
      gravity: string,
      viewControllerBlacklist?: Array<string>
    ) {
        RCTToast.showWithGravity(
          message,
          duration === undefined ? RCTToast.SHORT : duration,
          gravity,
          viewControllerBlacklist
        );
    },
};
