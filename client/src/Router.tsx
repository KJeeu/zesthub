import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { PATH } from "./constants/path";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import IntroducePage from "./pages/IntroducePage";
import RecipeSearchPage from "./pages/RecipeSearchPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import BookmarkPage from "./pages/BookmarkPage";

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
				{ path: `${PATH.recipeSearch}`, element: <RecipeSearchPage /> },
				{ path: `${PATH.recipeDetail}`, element: <RecipeDetailPage /> },
				{ path: `${PATH.bookmark}`, element: <BookmarkPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default Router;
