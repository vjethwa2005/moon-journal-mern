import Dashboard from '../pages/private/Dashboard';
import '../styles/View.css';

const View = () => {
  return (
    <div className='view-container'>
      <div className="view-heading">
        Where your thoughts land when the world feels loud.
      </div>
      <div className='preview'>
        <div className="preview-mac-header">
          <span className="mac-dot red"></span>
          <span className="mac-dot yellow"></span>
          <span className="mac-dot green"></span>
        </div>
        <div className="preview-content">
          <Dashboard />
        </div>
      </div>
    </div>
  )
};

export default View;