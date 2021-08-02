import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, {
    AboutPage,
    FeaturePage,
    FeaturesPage,
    PricingPage,
    TestimonialsPage,
    HelpPage,
    LoginPage,
    PaymentPage,
    CheckEmailPage,
    LoginEmailPage,
    AddSitePage,
    SetupPixelPage,
} from "../../../pages"

const Switcher = () => (
    <Switch>
         <Route path="/about">
            <AboutPage />
        </Route>
        <Route path="/feature">
            <FeaturePage />
        </Route>
        <Route path="/features">
            <FeaturesPage />
        </Route>
        <Route path="/pricing">
            <PricingPage />
        </Route>
        <Route path="/testimonials ">
            <TestimonialsPage />
        </Route>
        <Route path="/help">
            <HelpPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/payment">
            <PaymentPage />
        </Route>
        <Route path="/checkEmail">
            <CheckEmailPage />
        </Route>
        <Route path="/setupPixel">
            <SetupPixelPage />
        </Route>
        <Route path="/addSite">
            <AddSitePage />
        </Route>
        <Route path="/loginEmail">
            <LoginEmailPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher