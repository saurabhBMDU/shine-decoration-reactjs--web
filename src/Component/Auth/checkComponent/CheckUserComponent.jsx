import React, { Children } from "react";
import './checkuser.css';

export function CheckUserComponent({Children}) {
  return <section className="check-main-container">
                <div>
                    <img src="/img/cart-not-login.webp" alt=""  style={{width:'30%',}}/>
                </div>
                <div>
                  {Children}
                </div>
        </section>;
}
  