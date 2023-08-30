import { Icon } from '@iconify/react';
import './style.scss';

function Error() {
  return (
    <div className="error">
      <div className="error-icon">
        <Icon className="face-icon" icon="fluent-mdl2:sad" />
        <Icon className="tear-icon" icon="uil:tear" />
      </div>

      <h2>ERROR 404</h2>
      <h3>NOT FOUND</h3>
    </div>
  );
}

export default Error;
