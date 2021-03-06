import React from "react"
import * as ROUTES from "../../../constants/routes"
import { NavLink } from "react-router-dom"
import FeatureLink from "./Links/Features"

const Linker = () => (
    <nav>
        <ul className="flex text-black font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
            <FeatureLink />
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.ABOUT.link} activeClassName="cursor-pointer text-orange-400"> {ROUTES.ABOUT.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.FEATURE.link} activeClassName="cursor-pointer text-orange-400"> {ROUTES.FEATURE.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.PRICING.link} activeClassName="cursor-pointer text-orange-400"> {ROUTES.PRICING.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.TESTIMONIALS.link} activeClassName="cursor-pointer text-orange-400" >{ROUTES.TESTIMONIALS.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.HELP.link} activeClassName="cursor-pointer text-orange-400">{ROUTES.HELP.name}</NavLink></li>
        </ul>
    </nav>
)
export default Linker