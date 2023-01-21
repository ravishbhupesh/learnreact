import Speakers from "./Speakers";
import Header from "./Header.js";
import Layout from "./Layout";



const Conference = () => {
    return (
        <Layout startingTheme="light">
            <div>
                <Header />
                <Speakers />
            </div>
        </Layout>
    );
};

export default Conference;