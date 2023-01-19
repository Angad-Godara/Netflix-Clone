import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from '../../firebase';
import './Auth.css'

function Auth() {

    let [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get('mode')
    const [password, setpassword] = useState(null);
    const [cnfpassword, setcnfpassword] = useState(null);
    const [passwordErr, setPasswordErr] = useState(null);
    const [cnfpasswordErr, setCnfPasswordError] = useState(null);
    const navigate = useNavigate();

    const handleValidation = (evnt) => {
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        //for password 
        if (passwordInputFieldName === 'password') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{6,}/;
            const passwordLength = passwordInputValue.length;
            const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
            const digitsPassword = digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword = minLengthRegExp.test(passwordInputValue);
            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "Password is empty";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 6 characters";
            } else {
                errMsg = "";
            }
            if (errMsg !== "")
                setPasswordErr(errMsg);
            else
                setPasswordErr(null)
        }
        // for confirm password
        if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && cnfpassword?.length > 0)) {

            if (password !== cnfpassword) {
                setCnfPasswordError("Confirm password is not matched");
            } else {
                setCnfPasswordError(null);
            }

        }
    }

    const resetPassword = (e) => {
        e.preventDefault();
        let oobCode = searchParams.get('oobCode')
        auth.confirmPasswordReset(oobCode, cnfpassword)
            .then(authUser => {
                navigate('/');
            }).catch(error => {
                alert(error)
            })
    }

    return (
        <div className='auth__wrapper'>
            <div className='loginScreen__gradient'>
                {mode === 'resetPassword' ?
                    <form className='reset__password__form'>
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                        <h1>Reset Password</h1>
                        <input name='password' onChange={(e) => setpassword(e.target.value)} onKeyUp={(e) => handleValidation(e)} placeholder='New Password' type={'password'} />
                        {(passwordErr) ? <p className='input__errors'>{passwordErr}</p> : <div className='input__errors'></div>}
                        <input name='confirmPassword' onChange={(e) => setcnfpassword(e.target.value)} onKeyUp={(e) => handleValidation(e)} placeholder='Confirm new Password' type={'password'} />
                        {(cnfpasswordErr) ? <p className='input__errors'>{cnfpasswordErr}</p> : <div className='input__errors'></div>}
                        <button disabled={!password || password !== cnfpassword} onClick={resetPassword} type='submit'>Sign In</button>
                    </form>
                    :
                    <p>others</p>
                }
            </div>
        </div >
    )
}

export default Auth