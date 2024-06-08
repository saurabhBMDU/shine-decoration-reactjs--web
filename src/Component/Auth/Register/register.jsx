import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const countryCodes = [
  { name: 'Afghanistan', code: '+93' },
  { name: 'Albania', code: '+355' },
  { name: 'Algeria', code: '+213' },
  { name: 'Andorra', code: '+376' },
  { name: 'Angola', code: '+244' },
  { name: 'Antigua and Barbuda', code: '+1-268' },
  { name: 'Argentina', code: '+54' },
  { name: 'Armenia', code: '+374' },
  { name: 'Australia', code: '+61' },
  { name: 'Austria', code: '+43' },
  { name: 'Azerbaijan', code: '+994' },
  { name: 'Bahamas', code: '+1-242' },
  { name: 'Bahrain', code: '+973' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'Barbados', code: '+1-246' },
  { name: 'Belarus', code: '+375' },
  { name: 'Belgium', code: '+32' },
  { name: 'Belize', code: '+501' },
  { name: 'Benin', code: '+229' },
  { name: 'Bhutan', code: '+975' },
  { name: 'Bolivia', code: '+591' },
  { name: 'Bosnia and Herzegovina', code: '+387' },
  { name: 'Botswana', code: '+267' },
  { name: 'Brazil', code: '+55' },
  { name: 'Brunei', code: '+673' },
  { name: 'Bulgaria', code: '+359' },
  { name: 'Burkina Faso', code: '+226' },
  { name: 'Burundi', code: '+257' },
  { name: 'Cabo Verde', code: '+238' },
  { name: 'Cambodia', code: '+855' },
  { name: 'Cameroon', code: '+237' },
  { name: 'Canada', code: '+1' },
  { name: 'Central African Republic', code: '+236' },
  { name: 'Chad', code: '+235' },
  { name: 'Chile', code: '+56' },
  { name: 'China', code: '+86' },
  { name: 'Colombia', code: '+57' },
  { name: 'Comoros', code: '+269' },
  { name: 'Congo (Congo-Brazzaville)', code: '+242' },
  { name: 'Costa Rica', code: '+506' },
  { name: 'Croatia', code: '+385' },
  { name: 'Cuba', code: '+53' },
  { name: 'Cyprus', code: '+357' },
  { name: 'Czechia (Czech Republic)', code: '+420' },
  { name: 'Democratic Republic of the Congo', code: '+243' },
  { name: 'Denmark', code: '+45' },
  { name: 'Djibouti', code: '+253' },
  { name: 'Dominica', code: '+1-767' },
  { name: 'Dominican Republic', code: '+1-809, +1-829, +1-849' },
  { name: 'Ecuador', code: '+593' },
  { name: 'Egypt', code: '+20' },
  { name: 'El Salvador', code: '+503' },
  { name: 'Equatorial Guinea', code: '+240' },
  { name: 'Eritrea', code: '+291' },
  { name: 'Estonia', code: '+372' },
  { name: 'Eswatini (fmr. "Swaziland")', code: '+268' },
  { name: 'Ethiopia', code: '+251' },
  { name: 'Fiji', code: '+679' },
  { name: 'Finland', code: '+358' },
  { name: 'France', code: '+33' },
  { name: 'Gabon', code: '+241' },
  { name: 'Gambia', code: '+220' },
  { name: 'Georgia', code: '+995' },
  { name: 'Germany', code: '+49' },
  { name: 'Ghana', code: '+233' },
  { name: 'Greece', code: '+30' },
  { name: 'Grenada', code: '+1-473' },
  { name: 'Guatemala', code: '+502' },
  { name: 'Guinea', code: '+224' },
  { name: 'Guinea-Bissau', code: '+245' },
  { name: 'Guyana', code: '+592' },
  { name: 'Haiti', code: '+509' },
  { name: 'Holy See', code: '+379' },
  { name: 'Honduras', code: '+504' },
  { name: 'Hungary', code: '+36' },
  { name: 'Iceland', code: '+354' },
  { name: 'India', code: '+91' },
  { name: 'Indonesia', code: '+62' },
  { name: 'Iran', code: '+98' },
  { name: 'Iraq', code: '+964' },
  { name: 'Ireland', code: '+353' },
  { name: 'Israel', code: '+972' },
  { name: 'Italy', code: '+39' },
  { name: 'Jamaica', code: '+1-876' },
  { name: 'Japan', code: '+81' },
  { name: 'Jordan', code: '+962' },
  { name: 'Kazakhstan', code: '+7' },
  { name: 'Kenya', code: '+254' },
  { name: 'Kiribati', code: '+686' },
  { name: 'Kuwait', code: '+965' },
  { name: 'Kyrgyzstan', code: '+996' },
  { name: 'Laos', code: '+856' },
  { name: 'Latvia', code: '+371' },
  { name: 'Lebanon', code: '+961' },
  { name: 'Lesotho', code: '+266' },
  { name: 'Liberia', code: '+231' },
  { name: 'Libya', code: '+218' },
  { name: 'Liechtenstein', code: '+423' },
  { name: 'Lithuania', code: '+370' },
  { name: 'Luxembourg', code: '+352' },
  { name: 'Madagascar', code: '+261' },
]



function Register() {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    // Validate mobile number length
    if (value.length > 10) {
      setMobileNumberError('Mobile number must be 10 digits');
    } else {
      setMobileNumberError('');
    }
  };
  return (
    <>
      <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '420px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">Login</h3>
          <form>
            <div className="mt-2">
              <label htmlFor="username" className="">Username</label>
              <input type="text" className="form-control ps-2" id="username" placeholder="Enter username" />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="">Password</label>
              <input type="password" className="form-control ps-2" id="password" placeholder="Enter password" />
            </div>
            <div className="mt-2">
              <label htmlFor="mobile" className="">Mobile Number</label>
              <div className="input-group">
                <select
                  className="form-select"
                  value={selectedCode}
                  onChange={(e) => setSelectedCode(e.target.value)}
                  style={{ maxWidth: '80px' }}
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      ({country.code})
                    </option>
                  ))}
                </select>
                <input type="number" className="form-control ps-2" id="mobile" placeholder="Enter mobile number" style={{ padding: "18px 0px" }} value={mobileNumber} onChange={handleMobileChange} />
              </div>
              {mobileNumberError && <div className="text-danger">{mobileNumberError}</div>}
            </div>
            <div className="">
              <Link to={'/forget'}>Forgot your password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
