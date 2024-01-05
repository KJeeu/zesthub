import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { PATH } from "./constants/path";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import IntroducePage from "./pages/IntroducePage";

const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{ index: true, element: <IntroducePage /> },
				{ path: `${PATH.main}`, element: <MainPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default Router;
