import { Outlet } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51OxtV5DbZLGXtOEnLmMqJnsyhIkFu7ldU9CvSWb6lvuul4n71xSiQRqy1bE5DEULWrwwB8PbbMuCCATTkVsAv9J200fbjXOscU"
);

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
    const options = {
        // passing the client secret obtained from the server
        clientSecret: "{{CLIENT_SECRET}}",
    };
    return (
        <ApolloProvider client={client}>
            <StoreProvider>
                <Elements stripe={stripePromise} options={options}>
                    <Nav />
                    <Outlet />
                </Elements>
            </StoreProvider>
        </ApolloProvider>
    );
}

export default App;
