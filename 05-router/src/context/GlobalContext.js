import { createContext } from "react";

const initialState = {
    shoes: [
         {
            id: "air-jordan-3-valor-blue",
            name: "VALOUR BLUE",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
         },
         {
            id: "jordan-mars-270-london",
            name: "JORDAN MARS 270 LONDON",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
         },
          {
            id: "air-jordan-1-zoom-racer-blue", 
            name: "RACER BLUE",
            img:
              "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
          }
    ],
};
  // Create context
export const GlobalContext = createContext(initialState);
