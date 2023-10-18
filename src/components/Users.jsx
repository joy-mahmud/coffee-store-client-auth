import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData()
  const [users,setUsers] = useState(loadedUser)
  const handleDeleteUser = (id)=>{
    fetch(`https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/users/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                data.deletedCount>0 && console.log('user deleted successfully')
              const remainingUsers =  users.filter(user=>user._id !==id)
              setUsers(remainingUsers)
            })
  }

    return (
        <div>
            {

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>CreatedAt</th>
                                <th>Last loggedAT</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignIn}</td>
                                    <td><button onClick={()=>handleDeleteUser(user._id)}>X</button></td>
                                </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Users;