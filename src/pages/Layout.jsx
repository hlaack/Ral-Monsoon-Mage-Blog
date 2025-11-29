import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

import "../index.css";

function Layout() {
	return(
		<div className="wrapper">
				<>
					<NavBar />
					<div className="content">
						<Outlet />
					</div>
					<Footer />
				</>
		</div>
	);
}

export default Layout;