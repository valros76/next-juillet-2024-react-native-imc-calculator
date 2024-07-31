import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key = "@key", value) => {
  try{
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  }catch(err){
    console.table(err);
  }
}

const getData = async (key = "@key") => {
  try{
    const jsonValue = await AsyncStorage.getItem(key);
    
    return verifyJsonValue(jsonValue);

  }catch(err){
    console.table(err);
  }
}

const deleteData = async () => {
  try{
    AsyncStorage.removeItem("@key");
  }catch(err){
    console.table(err);
  }
}

const deleteAllDatas = async () => {
  try{
    AsyncStorage.clear();
  }catch(err){
    console.table(err);
  }
}

const verifyJsonValue = (jsonValue) => {
  if(!jsonValue){
    return;
  }
  const isJsonStringified = jsonValue.includes(":");
  return isJsonStringified ? JSON.parse(jsonValue) : jsonValue.replaceAll("\"", "");
}

export async function initFirstname(firstname = ""){
  try{
    if(firstname.length <= 0){
      return;
    }

    const jsonValue = await getData("@profile");
    if(!jsonValue){
      await storeData("@profile", firstname);
      return firstname;
    }

    return verifyJsonValue(jsonValue);

  }catch(err){
    console.table(err);
  }
}

export async function modifyFirstname(firstname = ""){
  try{
    if(firstname.length <= 0){
      return;
    }
    
    await storeData("@profile", firstname);
    return firstname;
  }catch(err){
    console.table(err);
  }
}

export async function getSavedFirstname(){
  try{
    const jsonValue = await getData("@profile");
    return verifyJsonValue(jsonValue);
  }catch(err){
    console.table(err);
  }
}

export async function getSavedHistory(){
  try{
    const jsonValue = await getData("@history");
    // return verifyJsonValue(jsonValue);
    return jsonValue;
  }catch(err){
    console.table(err);
  }
}

export async function saveImcResultToHistory(size, weight, imc, imcHint, sizeUnit = "cm", weightUnit = "kg"){
  try{
    const firstname = await getSavedFirstname();
    const actualDate = new Date();
    let day = actualDate.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = actualDate.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let year = actualDate.getFullYear();

    const historyResult = {
      firstname: firstname,
      date: `${day}/${month}/${year}`,
      timestamp: Date.now(),
      imc: Number(imc.toFixed(1)),
      imcHint: imcHint,
      size: Number(size),
      sizeUnit: sizeUnit,
      weight: Number(weight),
      weightUnit: weightUnit,
    };

    let history = [];

    const oldHistory = await getData("@history");

    if(oldHistory){
      history = [
        ...oldHistory,
        historyResult
      ];
    }else{
      history = [
        historyResult
      ];
    }

    await storeData("@history", history);

  }catch(err){
    console.table(err);
  }
}