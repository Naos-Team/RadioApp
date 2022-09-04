import { Dimensions } from "react-native"

export const value1 = "1";
export const value2 = "2";
export const value3 = "3";

export const HEIGHT = Dimensions.get('window').height
export const WIDTH = Dimensions.get('window').width

export const RADIO_STACK = 'Radio'
export const ONDEMAND_STACK = 'Ondemand'
export const MOSTVIEW_STACK = 'Most View'
export const FAVORITE_STACK = 'Favorite'
export const PREMIUM_STACK = 'Premium'

export const URL_SERVER = 'https://tuanpc.pw/radiorn/api/'
export const URL_GET_ALL_PLL = URL_SERVER + 'playlist/getAll.php'
export const URL_GET_ON_DEMAND = URL_SERVER + 'radio/getOnDemand.php'
export const URL_GET_TRENDING = URL_SERVER + 'radio/getTrendingRadio.php'
export const URL_GET_BY_PAGE = URL_SERVER + 'radio/getByPage.php'
export const URL_GET_COUNTRY = URL_SERVER + 'country/getAll.php'
export const URL_GET_LANGUAGE = URL_SERVER + 'language/getAll.php'
export const URL_GET_MOSTVIEW = URL_SERVER + 'radio/getMostViewRadio.php'
export const URL_GET_RADIO_BY_LANG = URL_SERVER + 'radio/getByLanguage.php'
export const URL_GET_RADIO_BY_COUNTRY = URL_SERVER + 'radio/getByCountry.php'
export const URL_GET_RADIO_BY_SEARCH = URL_SERVER + 'radio/getSearchResult.php'