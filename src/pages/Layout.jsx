import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
	return(
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default Layout;