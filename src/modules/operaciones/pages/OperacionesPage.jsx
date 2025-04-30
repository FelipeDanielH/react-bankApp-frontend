import TransferForm from '../components/TransferForm';

const OperacionesPage = () => {
  return (
    <div className="container-fluid">
      <h2 className="mb-4 fw-bold" style={{ color: '#333' }}>Transferencias</h2>
      
      <div className="col-md-8 mx-auto">
        <TransferForm />
      </div>
    </div>
  );
};

export default OperacionesPage;
