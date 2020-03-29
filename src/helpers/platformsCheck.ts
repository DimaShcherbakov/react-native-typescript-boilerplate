import { Platform } from 'react-native';

export const isIos: boolean = Platform.OS === 'ios';
export const isAndroid: boolean = Platform.OS === 'android';
export const isWindows: boolean = Platform.OS === 'windows';
