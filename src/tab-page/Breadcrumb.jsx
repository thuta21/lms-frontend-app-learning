import './Breadcrumb.scss';
import PropTypes from 'prop-types';

const Breadcrumb = ({ title }) => (
  <nav className="breadcrumb">
    <ul>
      <li>Home</li>
      <span className="separator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
      <li>My Learning</li>
      <span className="separator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
      <li className="current">{title || 'Medcenter'}</li>
    </ul>
  </nav>
);

Breadcrumb.propTypes = {
  title: PropTypes.string,
};

export default Breadcrumb;
