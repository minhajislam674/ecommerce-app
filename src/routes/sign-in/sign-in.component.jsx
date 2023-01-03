import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../util/firebase/firebase.util'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

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
            <SignUpForm/>
        </div>
    );
};

export default SignIn;