import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  // Statelar
  const [check, setCheck] = useState(false);
  const [login, setLogin] = useState({
    login: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setCheck(false);
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  // Validatsiya funksiyasi
  const Check = async () => {
    try {
      const res = await axios.post(`${config.SERVER_URL}login`, login);
      if (res.status === 200) {
        navigate("/home");
        sessionStorage.setItem(`jwt-token`, res.data.jwt_token);
        localStorage.setItem("admin", JSON.stringify(res.data.message));
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 402) {
        setCheck(true);
      }
    }
  };

  return (
    // <div className="loginCon bg-light d-flex justify-content-center align-items-center">
    //   <div className="container  p-5 ">
    //     <div className="row justify-content-center">
    //       <div className="col-md-8 p-5">
    //         <div className="card border-0">
    //           <h2 className="p-4 text-sm-center">Login</h2>
    //           <form onSubmit={Submit} className="globalBorder border-light p-4">
    //             <input
    //               className="form-control form-control-lg bg-light ps-2 w-75 mx-auto"
    //               type="text"
    //               placeholder="Login"
    //               name="login"
    //               value={login.login}
    //               onChange={changeHandler}
    //             />

    //             <input
    //               className="form-control form-control-lg mt-5 bg-light ps-2 w-75 mx-auto"
    //               type="password"
    //               placeholder="parol"
    //               name="password"
    //               value={login.password}
    //               onChange={changeHandler}
    //             />
    //             <div className="">
    //               {check ? (
    //                 <h4 className="text-danger mt-3 mx-auto text-center">
    //                   login yoki parol xato !
    //                 </h4>
    //               ) : (
    //                 false
    //               )}
    //             </div>
    //             <input
    //               onClick={() => Check()}
    //               value="Login"
    //               type="submit"
    //               className="btn btn-primary mt-5 px-5 py-2 d-block my-3 mx-auto"
    //             />
    //           </form>
    //           <h5 className="ms-5 text-primary" onClick={()=>navigate("/sign")}>Create profil</h5>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg bg-light ps-2 w-100 m-1 mx-auto form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg bg-light ps-2 w-100 m-1 mx-auto form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <input
                        // onClick={() => Check()}
                        value="Login"
                        type="submit"
                        className="btn btn-primary mt-5 px-5 py-2 d-block my-3 mx-auto"
                      />
                    </form>
                    <hr />
                    <div className="text-center">
                      <h6 className="text-primary pointer">Forgot Password?</h6>
                    </div>
                    <div className="text-center">
                      <h6
                        className="text-primary pointer"
                        onClick={() => navigate("/sign")}
                      >
                        Create an Account!
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
