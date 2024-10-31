import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./Routes/AppNavigator";
import store from "./state-management/store";
import { useFonts } from "expo-font";
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { Unauthnavigator } from "./Routes/Unauthnavigator";
import { firebaseConfig } from "./state-management/env/firebaseconfig";

export default function App() {
  const [userstatus, setUserStatus] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        // Initialize Firebase
        if (!firebase.apps.length) {
          const a = firebase.initializeApp(firebaseConfig);
          const auth = initializeAuth(a, {
            persistence: getReactNativePersistence(AsyncStorage),
          });
          // const storage = getStorage(a);
          // console.log(auth);
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // let token = user?.stsTokenManager?.accessToken;
              // setAuthToken(token);
              setUserStatus(true);
              // console.log(token);
              console.log(user);
            } else {
              console.log(user);
              setUserStatus(false);
            }
          });
        }
      })();
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  const [fontsLoaded] = useFonts({
    // fonts styles used in all over app
    RB: require("./assets/Fonts/Roboto-Black.ttf"),
    RBB: require("./assets/Fonts/Roboto-Bold.ttf"),
    RL: require("./assets/Fonts/Roboto-Light.ttf"),
    RR: require("./assets/Fonts/Roboto-Regular.ttf"),
    RM: require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      {/* main navigation here  */}
      <AppNavigator />
      {/* {userstatus ? <AppNavigator /> : <Unauthnavigator />} */}
    </Provider>
  ) : null;
}
