import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import { Switcher } from "../components/features/Navigation"
import HeaderMobile from "../layouts/Header/mobile"
import FooterMobile from "../layouts/Footer/mobile"

class App extends React.Component {
    render() {
        return (<div>
            <Router >
                <Header />
                <Switcher />
                <HeaderMobile forMobile={true} />
                <FooterMobile forMobile={true} />
                <Footer />
            </Router>
        </div>
        )
    }
}
export default App