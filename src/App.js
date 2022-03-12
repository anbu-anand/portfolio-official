import { useState } from 'react';
import { useSelector } from 'react-redux';

import { addUser } from './states/reducers/usersReducer';
import { useDispatch } from 'react-redux';

export default function App() {
    const [userData, setUserData] = useState({ name: '', username: '' });
    const usersList = useSelector((state) => state.users.usersList);
    const dispatch = useDispatch();

    const handleAddUser = () => {
        dispatch(addUser({ ...userData, id: usersList.length + 1 }));
    };

    return (
        <div className="container">
            <input
                type="text"
                name="name"
                value={userData.name}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                    })
                }
            />
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={(e) =>
                    setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                    })
                }
            />
            <button className="btn btn-success" onClick={handleAddUser}>
                Add User
            </button>

            <br />
            <ul className="list ">
                {usersList.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
