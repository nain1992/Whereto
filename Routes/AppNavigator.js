import * as React from "react";
{
  /* app navigator contening all the screens code and components here the main router of app */
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../Screens/Onboarding/Onboarding";
import Signup from "../Screens/Signup/Signup";
import Signupwithemail from "../Screens/Signupwithemail/Signupwithemail";
import Login from "../Screens/Login/Login";
import ForgetPassword from "../Screens/ForgetPassword/ForgetPassword";
import GetCode from "../Screens/GetCode/GetCode";
import SetNewPassword from "../Screens/SetNewPassword/SetNewPassword";
import Home from "../Screens/Home/Home";
import ExpendScreen from "../Screens/ExpendScreen/ExpendScreen";
import Storypage from "../Screens/Storypage/Storypage";
import SearchPage from "../Screens/SearchPage/SearchPage";
import SearchTrending from "../Screens/SearchTrending/SearchTrending";
import GeneralSearch from "../Screens/GeneralSearch/GeneralSearch";
import Events from "../Screens/Events/Events";
import Chat from "../Screens/Chat/Chat";
import Inbox from "../Screens/Inbox/Inbox";
import Newmassege from "../Screens/Newmassege/Newmassege";
import Groupinfo from "../Screens/Groupinfo/Groupinfo";
import Groupmambers from "../Screens/Groupmembers/Groupmambers";
import Createpage from "../Screens/Createpage/Createpage";
import Planner from "../Screens/Planner/Planner";
import Notifications from "../Screens/Notifications/Notifications";
import Profile from "../Screens/Profile/Profile";
import Myfollowers from "../Screens/Myfollowers/Myfollowers";
import DestiAIplaner from "../Screens/DestiAIplaner/DestiAIplaner";
import Destirefiner from "../Screens/Destirefiner/Destirefiner";
import PlannerAI from "../Screens/PlannerAI/PlannerAI";
import AIresults from "../Screens/AIresults/AIresults";
import SavedCollection from "../Screens/SavedCollection/SavedCollection";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Signupwithemail" component={Signupwithemail} />
      {/* app navigator contening all the screens code and components here the main router of app */}
      <Screen name="Home" component={Home} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SearchPage" component={SearchPage} />
      <Screen name="GeneralSearch" component={GeneralSearch} />
      <Screen name="Events" component={Events} />
      <Screen name="Destirefiner" component={Destirefiner} />
      <Screen name="Inbox" component={Inbox} />
      <Screen name="Planner" component={Planner} />
      <Screen name="Profile" component={Profile} />
      <Screen name="DestiAIplaner" component={DestiAIplaner} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Myfollowers" component={Myfollowers} />
      <Screen name="Createpage" component={Createpage} />
      <Screen name="ExpendScreen" component={ExpendScreen} />
      <Screen name="Storypage" component={Storypage} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Login" component={Login} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
      <Screen name="GetCode" component={GetCode} />
      <Screen name="SetNewPassword" component={SetNewPassword} />
      <Screen name="SearchTrending" component={SearchTrending} />
      <Screen name="Chat" component={Chat} />
      <Screen name="Newmassege" component={Newmassege} />
      <Screen name="Groupinfo" component={Groupinfo} />
      <Screen name="Groupmambers" component={Groupmambers} />
      <Screen name="PlannerAI" component={PlannerAI} />
      <Screen name="AIresults" component={AIresults} />
      <Screen name="SavedCollection" component={SavedCollection} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
