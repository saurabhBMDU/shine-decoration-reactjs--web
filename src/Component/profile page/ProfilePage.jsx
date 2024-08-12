import React, { useState } from "react";
import "./profilepage.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("john.doe@example.com");
    const [pincode, setPincode] = useState("123456");
   const user = useSelector(state=>state.getUser.user)


    const handleEditClick = () => {
        setIsEditing(true);
        // Redirect to edit profile page or open edit mode
        // Example: Redirect to another page
        // history.push('/edit-profile');
    };

    return (       
                user? ( <div className="profile-container">
                         <div className="profile-card">
                            <div className="profile-header">
                                <h2>Your Profile</h2>
                            </div>
                            <div className="profile-body">
                            <div className="profile-field">
                                <label className="field-label">Name:</label>
                                <p className="field-value">{user.name}</p>
                            </div>
                           {user.email && <div className="profile-field">
                                <label className="field-label">Email:</label>
                                <p className="field-value">{user.email}</p>
                            </div>}
                            <div className="profile-field">
                                <label className="field-label">Mobile:</label>
                                <p className="field-value">{user.mobile}</p>
                            </div>
                          {user.shipping_address.length > 0 &&  <div className="profile-field">
                                <label  className="field-label">Address:</label>
                                {user.shipping_address.map((item,i)=>(        
                                    <div key={i} style={{border:'1px solid lightgray', padding:'.5rem 3rem',}}>
                                        
                                     <label className="m-0 p-0" style={{fontWeight:700}}>Address {i+1}</label>
                                    <p className="m-0 text-capitalize">{item.fullName}</p>
                                    <span>{item.billing_address}</span>
                                    <span>,{item.city} </span>
                                    <br />
                                    <span>,{item.district} </span>
                                    <span>,{item.state} </span>
                                    <span>,{item.country} </span>
                                 </div>
                                ))}
                            </div>}
                            <Link to={`/profile/address`} className="profile-edit-button" onClick={handleEditClick}>
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>):(
                    <div className="loader"></div>
                )
    )
};

export default ProfilePage;