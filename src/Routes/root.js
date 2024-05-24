import { Outlet } from "react-router-dom";
import Header from "../Component/Header.js";

export default function Root() {
  return (
    <div className={"Full_Page"}>
            <Header />
            <div className="content">
                <Outlet />
            </div>
    </div>
  );
}