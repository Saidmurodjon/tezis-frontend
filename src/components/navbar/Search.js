import "./Navbar.css";
const Search = (props) => {
  const { SearchFunction } = props;

  const Submit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <form
        action=""
        className="navbar-search d-flex align-items-center"
        onSubmit={Submit}
      >
        <i className="bi bi-search position-absolute m-2 ms-2 text-secondary"></i>
        <input
          className="px-3 text-secondary"
          type="search"
          // placeholder="qidirish"
          onChange={(e) => SearchFunction(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
