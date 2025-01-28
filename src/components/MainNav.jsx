import { useGlobalContext } from "../context/GlobalContext";

const MainNav = () => {

  const { fetchData, userTitle, handleInput } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userTitle.trim()) {
      console.log("Inserisci un titolo valido.");
      return;
    }
    fetchData();
  };


  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BOOLFLIX</a>
          <form
            className="d-flex"
            role="search"
            onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cerca per titolo"
              aria-label="Search"
              value={userTitle}
              onChange={handleInput}
            />
            <button
              className="btn btn-outline-success">
              <i
                className="fa-brands fa-searchengin fa-lg"></i>
            </button>
          </form>
        </div>
      </nav >
    </>
  )
}

export default MainNav;