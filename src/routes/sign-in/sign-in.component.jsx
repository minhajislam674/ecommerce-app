import {signInWithGooglePopup} from '../../util/firebase/firebase.util'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await  signInWithGooglePopup();
        console.log(response)
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