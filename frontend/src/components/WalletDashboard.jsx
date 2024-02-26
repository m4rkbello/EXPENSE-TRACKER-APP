/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWallets, createWallet, updateWallet, deleteWallet } from '../redux/actions/walletAction'; // Import your actions

function WalletDashboard({ wallets, loading, error, fetchWallets, createWallet, updateWallet, deleteWallet }) {
  useEffect(() => {
    // Fetch wallets when component mounts
    fetchWallets();
  }, [fetchWallets]);

  // Define functions to handle creating, updating, and deleting wallets
  const handleCreateWallet = (walletData) => {
    createWallet(walletData);
  };

  const handleUpdateWallet = (walletId, updateData) => {
    updateWallet(walletId, updateData);
  };

  const handleDeleteWallet = (walletId) => {
    deleteWallet(walletId);
  };

  return (
    <div>
    <div className="flex">
    <div className="flex-none">
      <div className="card w-full glass">
        <div className="card-body">
          <div className="overflow-x-auto">
    
            <div className='text-center text-3xl text-black'>WALLET LIST</div>
    
            <table className="table">
              {/* head */}
              <thead className='bg-black'>
                <tr>
                  <th>NAME</th>
                  <th></th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </div>
    <div className="flex-initial">
    
    </div>
    <div className="flex-initial w-32 ...">
      03
    </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wallets: state.walletState.wallets, 
  loading: state.walletState.loading,
  error: state.walletState.error // Mapping error state to props
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWallets: () => dispatch(fetchWallets()), 
    createWallet: (walletData) => dispatch(createWallet(walletData)),
    updateWallet: (walletId, updateData) => dispatch(updateWallet(walletId, updateData)),
    deleteWallet: (walletId) => dispatch(deleteWallet(walletId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletDashboard);
