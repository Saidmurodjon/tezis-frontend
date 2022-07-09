import ProfilImg from "../../assets/user.png";
import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profil = ({ type = "" }) => {
  const user = JSON.parse(localStorage.getItem(type));
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const Close = () => {
    setOpen(!open);
  };
  const Chiqish = () => {
    sessionStorage.removeItem("jwt-token");
    localStorage.removeItem("state");
    navigate("/");
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="d-inline m-3 pointer" onClick={() => navigate("/")}>
          Bosh sahifa
        </h5>
        {/* <h5 className="d-inline m-3" onClick={() => navigate("/d")}>
          Yangi
        </h5> */}
        {/* <h5 className="d-inline m-3" onClick={() => navigate("/d")}>
          Yangi
        </h5> */}
        {type === "teacher" ? (
          <>
            {" "}
            <h5
              className="d-inline m-3 pointer"
              onClick={() => navigate("/teacher")}
            >
              So'rovlar tarixi
            </h5>
            <h5
              className="d-inline m-3 pointer"
              onClick={() => navigate("/teacher/document")}
            >
              Yangi habar yaratish
            </h5>
          </>
        ) : null}
        {type === "chief" ? (
          <>
            {" "}
            <h5
              className="d-inline m-3 pointer"
              onClick={() => navigate("/chief")}
            >
              Tezis
            </h5>
            <h5
              className="d-inline m-3 pointer"
              onClick={() => navigate("/chief/teachers")}
            >
              O'qituvchilar
            </h5>
          </>
        ) : null}
        <div className="profil-content d-flex align-items-center position-relative">
          {type ? (
            <>
              <i className="bi bi-bell h5 text-secondary me-5"></i>
              <div className="d-flex flex-column align-items-end">
                <span className="span1">{user.fullName}</span>
                <span className="text-secondary span2">{type}</span>
              </div>
              <img src={ProfilImg} alt="" className="rounded-pill ms-3" />
              <i
                className="bi bi-chevron-down h5 mt-2 ms-2 text-secondary pointer"
                onClick={Close}
              ></i>
              <div
                className={
                  open
                    ? "position-absolute ochish border px-3 pt-2"
                    : "position-absolute yopish"
                }
              >
                <ul>
                  <li>
                    <p onClick={Chiqish}>Log out</p>
                  </li>
                  <li onClick={() => navigate(`/${type}/settings/${user._id}`)}>
                    <p>Settings</p>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <button
                className="btn btn-success"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profil;
