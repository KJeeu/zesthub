import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "@/styles/GlobalStyle";
import App from "./App.tsx";
import { AuthContextProvider } from "./store/AuthContext.tsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={true} />
			<GlobalStyle />
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
