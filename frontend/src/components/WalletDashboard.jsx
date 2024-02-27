/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// components/WalletDashboard.js
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWallets, createWallet, updateWallet, deleteWallet } from '../redux/actions/walletAction';

function WalletDashboard({ wallets, loading, error, fetchWallets }) {
    useEffect(() => {
        fetchWallets();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className='text-5xl'>Error: {error}</p>}
            {wallets.length === 0 ? (
                <p className='text-9xl'>No wallets found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wallets.map(wallet => (
                                <tr key={wallet.id}>
                                    <td>{wallet.id}</td>
                                    <td>{wallet.name}</td>
                                    <td>{wallet.job}</td>
                                    <td>{wallet.favoriteColor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    wallets: state.wallets.wallets,
    loading: state.wallets.loading,
    error: state.wallets.error
});

const mapDispatchToProps = {
    fetchWallets,
    createWallet,
    updateWallet,
    deleteWallet
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletDashboard);
