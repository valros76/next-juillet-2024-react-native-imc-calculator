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

export async function getSavedFirstname(){
  try{
    const jsonValue = await getData("@profile");
    return verifyJsonValue(jsonValue);
  }catch(err){
    console.table(err);
  }
}