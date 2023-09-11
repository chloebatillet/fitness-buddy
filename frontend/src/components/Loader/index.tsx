import './style.scss';

type LoaderProps = {
  text?: string;
};

function Loader({ text}: LoaderProps) {
  return (
    <div className="loader">
      <p>{text || 'Loading'}</p>
    </div>
  );
}

export default Loader;
