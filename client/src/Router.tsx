import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle';

import MainPage from '@/pages/MainPage';

function Router() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;