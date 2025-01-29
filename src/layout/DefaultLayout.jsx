import MainNav from "../components/MainNav";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header className="bg-dark text-light">
        <MainNav></MainNav>
      </header>
      <main className="bg-dark">
        <Outlet />
      </main>
    </>

  )
}

export default DefaultLayout;