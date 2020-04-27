
import { NativeModules, Platform } from 'react-native';

const RNRingerMode = NativeModules.RNRingerMode;

export default class RingerMode {
	static async getRingerMode() {
		if (Platform.OS === 'android')
			return await RNRingerMode.getRingerMode();
		return null;
	}
}
