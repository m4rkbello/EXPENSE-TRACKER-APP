import { connect } from 'react-redux';
import { FetchUserList, RemoveUser, } from "../redux/Actions";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WalletDashboard = (props) => {
    console.log("DATA SA CHOI", props);

    useEffect(() => {
        props.loaduser();
    }, [])

    const handleDelete = (code) => {
        if(window.confirm("DO YOU WANT TO DELETE?")){
            props.removeuser(code);
            props.loaduser();
            toast.success('User has been deleted Successfully!'); 
        }
    }

    return (
        <div>
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
                     
                            <tr>
                                <td colSpan="6"><h1>
                                NO DATA!
                                </h1></td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}



export default WalletDashboard;
