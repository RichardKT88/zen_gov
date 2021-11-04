import { firebase } from "../config/firebase";

const socialMediaAuth = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .catch((err) => {
            return res;
        });
};

export default socialMediaAuth;