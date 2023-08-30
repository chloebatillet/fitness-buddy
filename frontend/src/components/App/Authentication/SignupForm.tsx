import Button from '../../Commons/Button/Button';
import FormField from '../../Commons/FormField/FormField';
import { useLogContext } from '../../../contexts/LogContext';

interface SignupFormProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignupForm({ isLogin, setIsLogin }: SignupFormProps) {
  const { signup, setMessage, setDisplayMessage } = useLogContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const objData = Object.fromEntries(formData);

    if (objData.password === objData.confirmPassword) {
      try {
        const success = await signup(objData);
        
        if (success) {
          setIsLogin(true);
        } else {
          console.log('echec');
        }
      } catch (error) {
        setMessage("Erreur lors de l'appel à signup");
        setDisplayMessage(true);
      }
    }
  };

  return (
    <div className="form">
      <h3 className="form-title">sign up</h3>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="firstname"
          placeholder="firstname"
          icon="solar:user-linear"
          required
          autoFocus
        />
        <FormField
          type="text"
          name="lastname"
          placeholder="lastname"
          icon="solar:user-linear"
          required
        />
        <FormField
          type="email"
          name="email"
          icon="ph:at"
          placeholder="email"
          required
        />
        <FormField
          type="password"
          name="password"
          placeholder="password"
          icon="solar:lock-password-linear"
          required
        />
        <FormField
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          icon="solar:lock-password-linear"
          required
        />

        <Button
          type="submit"
          value="sign up"
          style={{ fontWeight: 'normal' }}
          onClick={undefined}
        />
        <div className="form-complement">
          <p>
            Already have an account?{' '}
            <span className="link" onClick={() => setIsLogin(!isLogin)}>
              Log in!
            </span>
          </p>
          <a className="link" href="#">
            Oups! I forgot my password...
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
