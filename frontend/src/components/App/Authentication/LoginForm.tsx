import Button from '../../Commons/Button/Button';
import FormField from '../../Commons/FormField/FormField';

interface LoginFormProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginForm({ isLogin, setIsLogin }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log('envoyé');
  };

  return (
    <div className="form">
      <h3 className="form-title">login</h3>
      <form onSubmit={handleSubmit}>
        <FormField
          type="email"
          name="email"
          placeholder="email"
          icon="ph:at"
          required
          autoFocus
        />
        <FormField
          type="password"
          name="password"
          icon="solar:lock-password-linear"
          placeholder="password"
          required
        />
        <Button
          type="submit"
          value="login"
          style={{ fontWeight: 'normal' }}
          onClick={undefined}
        />
        <div className="form-complement">
          <p>
            Don't have an account yet?{' '}
            <span className="link" onClick={() => setIsLogin(!isLogin)}>
              Create one!
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
