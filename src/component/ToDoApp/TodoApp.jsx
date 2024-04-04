import './TodoApp.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="ToDoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome" element={<WelcomeComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function LoginComponent() {
    const [username, setUserName] = useState('haytam')
    const [password, setPassword] = useState('******')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUserNameChange(event) {
        setUserName(event.target.value)
    }
    function handlePassWordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if (username === 'haytam' && password === "dummy") {
            console.log('Success');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            console.log('Failed');
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    // function SuccessMessage() {
    //     if (showSuccessMessage) {
    //         return <div className={'successMessage'}> Authenticated Successfully </div>;
    //     }
    //     return null;
    // }
    //
    // function ErrorMessage() {
    //     if (showErrorMessage) {
    //         return <div className={'errorMessage'}> Authenticated Failed Please check your credentials</div>;
    //     }
    //     return null;
    // }

    return (
        <div className={'Login'}>
            {showSuccessMessage && <div className={'successMessage'}> Authenticated Successfully </div>}
            {showErrorMessage && <div className={'errorMessage'}> Authenticated Failed
                                                                Please check your credentials</div>}
            <div className={'LoginForm'}>
                <div>
                    <label>UserName</label>
                    <input type={'text'} name={'username'} value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type={'password'} name={'password'} value={password} onChange={handlePassWordChange}/>
                </div>
                <div>
                    <button type={'button'} name={'login'} onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );

}


function WelcomeComponent() {
    return (
        <div className={'Welcome'}>
            Welcome Component
        </div>
    )
}