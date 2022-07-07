import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    tel: "+998",
    email: "",
    type: "",
    login: "",
    password: "",
    kafedra: "",
    kafedraId: "",

    kafedraName: "",
    faculty: "",
    facultyId: "",
    date: new Date(),
  });
  const [kafedra, setKafedra] = useState([]);
  const [dekanat, setDekanat] = useState([]);
  console.log(kafedra);
  console.log(dekanat);

  const Add = async () => {
    const res = await axios.post(`${config.SERVER_URL + user.type}`, user);
    try {
      if (res.status === 201) {
        alert("ma'lumotlar qo'shildi");
        navigate("/login");
      }
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/");
      }
      console.log(err);
    }
  };
  useEffect(() => {
    const Get = async () => {
      const res = await axios.get(`${config.SERVER_URL}dean`);
      const res2 = await axios.get(`${config.SERVER_URL}chief`);
      try {
        if (res.status === 200) {
          setDekanat(res.data);
        }
        if (res2.status === 200) {
          setKafedra(res2.data);
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    };
    Get();
  }, []);
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user" onSubmit={Submit}>
                    {/* first-name */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="first-name">
                          F.I.SH
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          name="fullName"
                          type="text"
                          className="form-control form-control-user"
                          id="first-name"
                          placeholder="F.I.SH"
                          value={user.fullName}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    {/* phone number  */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="last-name">
                          Telefon
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="last-name"
                          placeholder="Familiya"
                          name="tel"
                          value={user.tel}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>

                    {/* email */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="email">
                          Email
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          name="email"
                          className="form-control form-control-user"
                          id="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    {/* type */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="email">
                          Holatni tanlang
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="type"
                            id="flexRadioDefault1"
                            value="chief"
                            onChange={changeHandler}
                          />
                          <label
                            className="form-check-label pointer"
                            htmlFor="flexRadioDefault1"
                          >
                            Kafedra mudiri
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="type"
                            id="flexRadioDefault2"
                            // checked
                            value="teachers"
                            onChange={changeHandler}
                          />
                          <label
                            className="form-check-label pointer"
                            htmlFor="flexRadioDefault2"
                          >
                            O'qituvchi
                          </label>
                        </div>
                      </div>
                    </div>
                    {user.type === "chief" ? (
                      <>
                        {/* Fakultet tanlash va kafedraga nom berish */}
                        <div className="form-group row mt-2">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <label className="pointer" htmlFor="kafedra">
                              Dekanatni tanlang
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <select
                              className="form-select"
                              id="kafedra"
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  facultyId: JSON.parse(e.target.value)._id,
                                  faculty: JSON.parse(e.target.value).faculty,
                                })
                              }
                            >
                              {dekanat.map((item) => (
                                <option
                                  key={item._id}
                                  value={JSON.stringify(item)}
                                >
                                  {item.faculty}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-sm-4 mb-3 mb-sm-0 mt-2">
                            <label className="pointer" htmlFor="kafname">
                              Kafedra Nomini Kiriting
                            </label>
                          </div>
                          <div className="col-sm-8 mt-2">
                            <input
                              type="text"
                              name="kafedraName"
                              className="form-control form-control-user"
                              id="kafname"
                              placeholder="Kafedra Nomi"
                              value={user.kafedraName}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                      </>
                    ) : null}
                    {user.type === "teachers" ? (
                      <>
                        {/* Kafedrani tanlash*/}
                        <div className="form-group row mt-2">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <label className="pointer" htmlFor="kafedra">
                              Kafedrani tanlang
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <select
                              className="form-select"
                              id="kafedra"
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  kafedraId: JSON.parse(e.target.value)._id,
                                  kafedra: JSON.parse(e.target.value)
                                    .kafedraName,
                                })
                              }
                            >
                              {kafedra.map((item) => (
                                <option
                                  key={item._id}
                                  value={JSON.stringify(item)}
                                >
                                  {item.kafedraName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </>
                    ) : null}
                    {/* login */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="login">
                          Login
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          name="login"
                          className="form-control form-control-user"
                          id="login"
                          placeholder="Login"
                          value={user.login}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    {/* passwor */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="pass">
                          Parolni kiriting
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="pass"
                          name="password"
                          placeholder="Parol"
                          value={user.password}
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                    {/* password repit */}
                    <div className="form-group row mt-2">
                      <div className="col-sm-4 mb-3 mb-sm-0">
                        <label className="pointer" htmlFor="password">
                          Parolni qayta kiriting
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="password"
                          placeholder="Parol"
                        />
                      </div>
                    </div>
                    <input
                      onClick={() => Add()}
                      value="SIGN UP"
                      type="submit"
                      className="btn btn-primary mt-5 px-5 py-2 d-block my-3 mx-auto"
                    />
                  </form>
                  <hr />
                  <div className="text-center">
                    <h6
                      className="text-primary pointer"
                      onClick={() => navigate("/login")}
                    >
                      Already have an account? Login!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
