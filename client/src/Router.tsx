import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import MainPage from "./pages/MainPage";

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
			children: [{ index: true, element: <MainPage /> }],
		},
	]);

	return <RouterProvider router={router} />;
}

export default Router;
