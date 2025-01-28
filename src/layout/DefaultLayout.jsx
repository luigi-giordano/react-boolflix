import MainNav from "../components/MainNav";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <MainNav></MainNav>
      </header>
      <main className="my-5">
        <Outlet />
      </main>
    </>

  )
}

export default DefaultLayout;