import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import useInput from "../useInput/useInput";
import UserService from "../../services/UserService";

const LoginForm = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const username = useInput('');
    const password = useInput('');

    const loginHandler = async (e) => {
        e.preventDefault();

        const credentials = new FormData();

        credentials.append('username', username.value);
        credentials.append('password', password.value);

        UserService.login(credentials).then((res) => {

            console.log(res.data)

            const user = res?.data?.username;
            const token = res?.data?.token;
            const authorities = res?.data?.authorities;
            const firstName = res?.data?.firstName;
            const lastName = res?.data?.lastName;
                
            setAuth({user, token, authorities, firstName, lastName})

            navigate('/')
        }).catch((error) => {
            console.log(error)
            console.log(error?.response?.data)
        });
    }

    return (
        <div className="container">
            <h1 className="title-1">Login</h1>
            <div className='creation-form-card'>
                <form className="creation-form-content">
                    <div className='input-container'>
                        <label className="input-label">Username</label>
                        <input placeholder='elon1337' name='model' className={'input' + (!username.isValid ? ' input-error' : '')}
                            value={username.value} onChange={username.onChange} onBlur={username.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Password</label>
                        <input placeholder='' type='password' name='password' className={'input' + (!password.isValid ? ' input-error' : '')}
                            value={password.value} onChange={password.onChange} onBlur={password.onBlur}/>
                    </div>
                    <div className="submit-btn-container">
                        <button className='btn btn-success' onClick={loginHandler}
                        disabled={!username.isReadyForSent || !password.isReadyForSent}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;