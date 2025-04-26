
import { useNavigate } from 'react-router-dom';

const QuickTransfer = () => {
  const navigate = useNavigate();

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="mb-0">¿Quieres hacer una transferencia?</h5>
        <button className="btn btn-outline-primary" onClick={() => navigate('/app/operaciones')}>
          <i className="bi bi-arrow-right-circle-fill fs-4"></i>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
