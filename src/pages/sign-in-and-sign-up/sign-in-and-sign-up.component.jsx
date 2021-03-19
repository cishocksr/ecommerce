import './sign-in-and-sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SingUp />
  </div>
);

export default SignInAndSignUpPage;
