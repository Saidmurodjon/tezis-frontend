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
  // console.log(login);
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
      // console.log(res);
      if (res.status === 200) {
        navigate(`/${res.data.user.role}`);
        // console.log(res.data.user);
        sessionStorage.setItem(`jwt-token`, res.data.jwt_token);
        localStorage.setItem(res.data.user.role, JSON.stringify(res.data.user));
        localStorage.setItem("state", JSON.stringify(res.data.user.role));
      }
    } catch (err) {
      if (err.response.status === 401) {
        setCheck(true);
      }
      console.log(err);
    }
  };

  return (
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
                    <form className="user" onSubmit={Submit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg bg-light ps-2 w-100 m-1 mx-auto form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="login"
                          value={login.login}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg bg-light ps-2 w-100 m-1 mx-auto form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          value={login.password}
                          onChange={changeHandler}
                        />
                      </div>
                      {check ? (
                        <div className="form-group">
                          <h5 className="text-center text-danger">
                            Login yoki parol noto'g'ri!
                          </h5>
                        </div>
                      ) : null}
                      <input
                        onClick={() => Check()}
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
