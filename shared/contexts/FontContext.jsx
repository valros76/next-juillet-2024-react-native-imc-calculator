import {useFonts} from "expo-font";
import { useEffect } from "react";
import {createContext, useContext} from "react";

const FontContext = createContext();

export default function FontProvider({children}){

  const [loadedFonts, errorFonts] = useFonts({
    "Titillium Web Light": require("@/assets/fonts/TitilliumWeb-Light.ttf"),
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  useEffect(() => {}, 
  [loadedFonts, errorFonts]);

  if (!loadedFonts) return null;

  return(
    <FontContext.Provider
      value={{
        loadedFonts,
        errorFonts,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

export const useFontContext = () => useContext(FontContext);