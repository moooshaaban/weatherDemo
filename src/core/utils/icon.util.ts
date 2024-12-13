import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

/**
 * Enum representing different icon types available from 'react-native-vector-icons' library.
 */
export enum IconType {
    antDesign,
    entypo,
    evilIcons,
    feather,
    fontAwesome,
    fontAwesome5,
    foundation,
    ionicons,
    materialIcons,
    materialCommunityIcons,
    octicons,
    zocial,
    simpleLineIcons,
    fontisto,
    custom, // For custom icons created using IcoMoon
}

/**
 * Function to get the appropriate icon component based on the IconType.
 *
 * @param {IconType} type - The type of the icon set.
 * @returns {React.Component} - The icon component corresponding to the provided IconType.
 */
export const getIconType = (type: IconType) => {
    switch (type) {
        case IconType.antDesign:
            return AntDesign; // Return AntDesign icon set
        case IconType.entypo:
            return Entypo; // Return Entypo icon set
        case IconType.evilIcons:
            return EvilIcons; // Return EvilIcons icon set
        case IconType.feather:
            return Feather; // Return Feather icon set
        case IconType.fontAwesome:
            return FontAwesome; // Return FontAwesome icon set
        case IconType.fontAwesome5:
            return FontAwesome5; // Return FontAwesome5 icon set
        case IconType.foundation:
            return Foundation; // Return Foundation icon set
        case IconType.ionicons:
            return Ionicons; // Return Ionicons icon set
        case IconType.materialIcons:
            return MaterialIcons; // Return MaterialIcons icon set
        case IconType.materialCommunityIcons:
            return MaterialCommunityIcons; // Return MaterialCommunityIcons icon set
        case IconType.octicons:
            return Octicons; // Return Octicons icon set
        case IconType.zocial:
            return Zocial; // Return Zocial icon set
        case IconType.simpleLineIcons:
            return SimpleLineIcons; // Return SimpleLineIcons icon set
        case IconType.fontisto:
            return Fontisto; // Return Fontisto icon set
        default:
            return AntDesign; // Return AntDesign icon set as default
    }
};
