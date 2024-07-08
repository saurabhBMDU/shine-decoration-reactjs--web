import React, { useEffect, useState } from "react";
import './popup.css';
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { checkUser } from "../../assest/js/checker";

const LoginPOP = () => {
  const [modal, setModal] = useState(checkUser());
  
  // Add an empty dependency array to ensure it runs once on mount

  return (
    <>
      <main className={!modal ? 'pop-m' : 'd-none'}>
        <section className="pop-up-login">
          <div>
            <IoMdClose size={25} onClick={() => setModal(true)} />
          </div>
          <div>
            <img src="/img/popupbg.png" alt="Popup Background" />
          </div>
          <div>
            <p>Please Login</p>
            <button className="badge text-bg-warning fs-4">
              <Link className="text-dark" to="/login">Login</Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPOP;
