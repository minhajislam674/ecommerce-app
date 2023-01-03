import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../util/firebase/firebase.util'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await  signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1> Sign in page </h1>
            <button onClick={logGoogleUser}>
                sign in with google pop up
            </button>
        </div>
    );
};

export default SignIn;