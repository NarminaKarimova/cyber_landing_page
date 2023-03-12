import React from "react";
import { Link } from 'react-scroll';
import './NavBar.css';
import Part1 from "../Part1/Part1";
import Part2 from "../Part2/Part2";
import Part3 from "../Part3/Part3";


function NavBar() {
    return <div className="NavBar">
        <img className="Logo" src="#" alt="LOGO" />
        <ul>
            <li>
                <Link to="part-1" smooth={true} duration={500}>Part 1</Link>
            </li>
            <li>
                <Link to="part-2" smooth={true} duration={500}>Part 2</Link>
            </li>
            <li>
                <Link to="part-3" smooth={true} duration={500}>Part 3</Link>
            </li>
        </ul>

    </div>
}

export default NavBar;