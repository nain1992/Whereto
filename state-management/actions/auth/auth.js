import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../env/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { GET_ERRORS } from "../../types/types";

export const SignUp = (data, setLoading) => async (dispatch) => {
  setLoading(true); // Start loading

  try {
    // Attempt to create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    // Extract user data
    const user = userCredential.user;

    // Save additional user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: data.email,
      // Add other fields as needed
    });

    console.log("Welcome!!");
    setLoading(false); // Stop loading after successful signup
  } catch (error) {
    setLoading(false); // Stop loading if there's an error
    let errorMessage = "Something went wrong.";

    // Handle specific error cases
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage =
          "The email address is already in use by another account.";
        break;
      case "auth/weak-password":
        errorMessage = "The password is too weak.";
        break;
      default:
        errorMessage = error.message; // Use generic error message
        break;
    }

    console.error(errorMessage);
    dispatch({ type: GET_ERRORS, payload: errorMessage }); // Dispatch error to Redux
    alert(errorMessage); // Show error message to user
  }
};
