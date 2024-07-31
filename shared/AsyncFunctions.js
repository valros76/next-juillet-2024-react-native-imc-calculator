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

export async function saveImcResultToHistory(size, weight, imc, imcHint, sizeUnit = "cm", weightUnit = "kg"){
  try{
    const firstname = await getSavedFirstname();
    const actualDate = new Date();

    const historyResult = {
      firstname: firstname,
      date: `${actualDate.getDay()}/${actualDate.getMonth()}/{${actualDate.getYear()}}`,
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

    history = [
      ...oldHistory,
      ...historyResult
    ];

    //history = JSON.parse(history);

    await storeData("@history", history);

  }catch(err){
    console.table(err);
  }
}