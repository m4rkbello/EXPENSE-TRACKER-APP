/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchWalletList } from "../redux/Actions";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard(props) {
    
    useEffect(() => {
        props.loadlist(); // Changed from props.loaduser() to props.loadlist()
    }, [])




    return (
        <div className="flex items-start ...">
        <ToastContainer />
        <div className="navbar-color col-8 text mx-auto">
            <div className="card-header userlist"></div>
            <h1 className='userHeader'>User List!</h1>
            <div className="buttonAdd">
                <Link to={'/user/add'} className="btn btn-secondary">Add User</Link>
            </div>
            <br />
            
            <table className="table table-bordered text-align-center">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {props.wallet.walletlist && props.wallet.walletlist.length > 0 ? (
                        props.wallet.walletlist.map((item, index) => 
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.role}</td>
                                <td className=''>
                                    
                                </td>
                            </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan="6"><h1>
                            NO DATA!
                            </h1></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
}

const mapStateToProps = (state) => { 
    return {
        wallet: state.wallet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadlist: () => dispatch(FetchWalletList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
