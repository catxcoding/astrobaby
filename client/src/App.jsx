//28 stu-mini
import { Outlet } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container } from "@mui/material";

import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <StoreProvider>
                <Nav />
                <Container>
                    <Outlet />
                </Container>
            </StoreProvider>
        </ApolloProvider>
    );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
// import Nav from "./components/nav";
// import Login from "./pages/login";

// import "./App.css";

// function App() {
//     return (
//         <>
//             <Router>
//                 <div>
//                     <Nav /> {/* Render your NavTabs component */}
//                     <Routes>
//                         <Route exact path="/" element={<Home />} />
//                         <Route path="/Login" element={<Login />} />
//                     </Routes>
//                 </div>
//             </Router>
//         </>
//     );
// }

// export default App;
