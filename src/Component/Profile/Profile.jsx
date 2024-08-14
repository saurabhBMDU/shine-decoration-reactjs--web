import React, { useCallback, useEffect, useState } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useToast } from 'react-toastify';
import { getUser, updateProfile } from '../../action/authaction';
import { faRoad } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    district: '',
    state: '',
    country: '',

  });
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.getUser?.user);
  const [currentImage, setCurrentImage] = useState(null);
  const [file, setFile] = useState(null);  // Keep track of the actual file
  const dispatch = useDispatch();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_image' && files.length > 0) {
      const file = files[0];
      setFile(file);  // Save the file in state
      setCurrentImage(URL.createObjectURL(file));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    if (user && !isEditing) {
      setForm(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        mobile: user.mobile || '',
        city: user.city || '',
        district: user.district || '',
        state: user.state || '',
        country: user.country || '',
        image:user.profile_image || null
      }));
    }
  }, [user, isEditing]);

  const handleSubmit = useCallback(async () => {
    if (isEditing) {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }
      if (file) {
        formData.append('image', file);  // Append the file
      }
      dispatch(updateProfile(formData));
      setIsEditing(false);
      setCurrentImage(null);
      await dispatch(getUser())
    } else {
      setIsEditing(true);
    }
  }, [isEditing, dispatch, form, file]);


  return (
    user ? (
    <section className="bg-light sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4 mb-sm-5">
            <div className="card card-style1 border-0">
              <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
                  {isEditing ? ( <img className='profileimg' src={currentImage || form.image} alt="..." />) :( <img className='profileimg' src={form.image } alt="..." />)}
                  {isEditing &&  <div id='picture'
                    style={{ padding:'1rem 1rem' , backgroundColor:'yellow', width:'max-content' ,margin:'0px auto' ,zIndex:10, borderRadius:'50%'} }>
                           <label htmlFor="profile_image" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <MdOutlineAddAPhoto color='black' size={25} />
                          </label>
                          <input type="file" id='profile_image' name='profile_image'  
                          onChange={handleInputChange}
                          style={{display:'none'}} />
                    </div>}
                  </div>
                  <div className="col-lg-6 px-xl-10">
                    <div className="bg-secondary d-lg-inline-block px-2 py-2 rounded">
                      {isEditing ? (
                        <input
                         name='name'
                          type="text"
                          value={form.name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        <h5 className="h2 text-white mb-0 text-capitalize">{user.name}</h5>
                      )}
                    
                    </div>
                    <ul className="list-unstyled mb-1-9">
                       <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">Email:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='email'
                            value={form.email}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.email}</span>
                        )}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">Phone:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='mobile'
                            value={form.mobile}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.mobile}</span>
                        )}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">city:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='city'
                            value={form.city}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.city}</span>
                        )}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">district:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='district'
                            value={form.district}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.district}</span>
                        )}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">state:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='state'
                            value={form.state}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.state}</span>
                        )}
                      </li>
                      <li className="mb-2 mb-xl-3 display-28">
                        <span className="display-26 text-secondary me-2 font-weight-600">country:</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name='country'
                            value={form.country}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <span>{user.country}</span>
                        )}
                      </li>
                    </ul>
                    <button onClick={handleSubmit} className="btn btn-warning">
                      {isEditing ? 'Save' : 'Edit Profile'}
                    </button>
                    <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                      <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                      <li><a href="#!"><i className="ti-facebook"></i></a></li>
                      <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                      <li><a href="#!"><i className="ti-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-4 mb-sm-5">
            <div>
              <span className="section-title text-primary mb-3 mb-sm-4 d-flex justify-content-start " style={{gap:'5rem'}}>Address   <Link to='/profile/address'>edit</Link></span>
                
                {user.shipping_address.map((item, i)=>(

                <div key={i}>
                  <hr />
                  <div>
                    <h5>Address {i+1}</h5>
                    <span style={{fontWeight:600}}> {item.fullName}</span> 
                    <br />
                    <span style={{fontWeight:600}}>{item.mobile}</span> <br />
                  <span>  {item.billing_address}.</span>, <span> {item.city}</span>
                  <br /> <span>{item.district}</span> <span>{item.state}</span> <br />
                  <span>Pincode :{item.pinCode}</span>
                  </div>

                </div>)
                )}
              
            </div>
            <div>
              <div className='border-2 '>


              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  ):(
    <div className='loader'></div>
  )

)
};

export default Profile;
