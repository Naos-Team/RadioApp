import { CONTANTS } from "."

export const get_Data_HomeSCR = async(page, step, uid) => {
  try {
    let resp_All_PLL = await fetch(CONTANTS.URL_GET_ALL_PLL)
    let resp_MOST_VIEW = await fetch(CONTANTS.URL_GET_MOSTVIEW + 
      `?page=${page}&step=${step}&uid=${uid}`)
    let resp_TRENDING = await fetch(CONTANTS.URL_GET_TRENDING + 
      `?page=${page}&step=${step}&uid=${uid}`)
    let resp_LATEST = await fetch(CONTANTS.URL_GET_BY_PAGE + 
      `?page=1&step=5&search_txt=&uid=${uid}`)
    let resp_COUNTRY = await fetch(CONTANTS.URL_GET_COUNTRY)
    let resp_LANG = await fetch(CONTANTS.URL_GET_LANGUAGE)
    let respone_All_PLL = await resp_All_PLL.json()
    let respone_MOSTVIEW = await resp_MOST_VIEW.json()
    let respone_TRENDING = await resp_TRENDING.json()
    let respone_LATEST = await resp_LATEST.json()
    let respone_COUNTRY = await resp_COUNTRY.json()
    let respone_LANG = await resp_LANG.json()
    debugger
    return {
      reload: false,
      playlist: respone_All_PLL.data,
      trending: respone_TRENDING.data,
      mostViews: respone_MOSTVIEW.data,
      latest: respone_LATEST.data,
      country: respone_COUNTRY.data,
      language: respone_LANG.data
    }
  } catch (error) {
    console.log("get_Home_SCR: ", error)
  }
}

export const get_Trending_Radio = async(page, step, uid) => {
  try {
    let resp_TRENDING = await fetch(CONTANTS.URL_GET_TRENDING + 
      `?page=${page}&step=${step}&uid=${uid}`)
    let respone_TRENDING = await resp_TRENDING.json()
    debugger
    return respone_TRENDING.data
  } catch (error) {
    console.log("get_Trending: ", error)
  }
}

export const get_All_Radio = async(page, step, uid) => {
  try {
    let resp_LATEST = await fetch(CONTANTS.URL_GET_BY_PAGE + 
      `?page=${page}&step=${step}&uid=${uid}`)
    let respone_LATEST = await resp_LATEST.json()
    debugger
    return respone_LATEST.data
  } catch (error) {
    console.log("get_All: ", error)
  }
}

export const get_Radio_By_Language = async(lang_id) => {
  try {
    let resp_LANG = await fetch(CONTANTS.URL_GET_RADIO_BY_LANG + 
      `?lang_id=${lang_id}`)
    let respone_LANG = await resp_LANG.json()
    debugger
    return respone_LANG.data
  } catch (error) {
    console.log("get_Radio_By_Language: ", error)
  }
}

export const get_Radio_By_Country = async(country_id) => {
  try {
    let resp_COUNTRY = await fetch(CONTANTS.URL_GET_RADIO_BY_COUNTRY + 
      `?country_id=${country_id}`)
    let respone_COUNTRY = await resp_COUNTRY.json()
    debugger
    return respone_COUNTRY.data
  } catch (error) {
    console.log("get_Radio_By_Country: ", error)
  }
}

export const get_Search_Result = async(page, step, search_txt, country_id, lang_id, views, is_trending, uid) => {
  try {
    let resp_SEARCH = await fetch(CONTANTS.URL_GET_RADIO_BY_SEARCH + 
      `?page=${page}&step=${step}&search_txt=${search_txt}&uid=${uid}&country_id=${country_id}&lang_id=${lang_id}&views=${views}&is_trending=${is_trending}`)
    let respone_SEARCH = await resp_SEARCH.json()
    debugger
    return respone_SEARCH.data
  } catch (error) {
    console.log("get_Search_Result: ", error)
  }
}

export const get_Country = async() => {
  try {
    let resp_COUNTRY = await fetch(CONTANTS.URL_GET_COUNTRY)
    let respone_COUNTRY = await resp_COUNTRY.json()
    debugger
    return respone_COUNTRY.data
  } catch (error) {
    console.log("get_Country: ", error)
  }
}

export const get_Language = async() => {
  try {
    let resp_LANG = await fetch(CONTANTS.URL_GET_LANGUAGE)
    let respone_LANG = await resp_LANG.json()
    debugger
    return respone_LANG.data
  } catch (error) {
    console.log("get_Language: ", error)
  }
}

export const makeRequest = async (url, method, params) => {

    const requestOptions = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    if(method !== "GET"){
        requestOptions.body = JSON.stringify(params)
    }

    const res = await fetch(url, requestOptions);
    
    return res.json();
}