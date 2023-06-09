import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton
} from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Context/Auth/AuthProvider";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai"

const Navigationbar = () => {

    const { user, logout } = useContext(AuthContext);


    const signOut = () => {
        logout()
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    };


    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-semibold text-2xl"
                    >
                        Vidyayan Eduventure
                    </Typography>
                    <div className="flex items-center gap-2">
                        <AiOutlineMail className="text-2xl font-medium mr-2" />
                        {user?.displayName}
                        {user?.photoURL ?
                            <div>
                                <img src={user?.photoURL} alt="" className="h-9 w-9 rounded-full" />
                            </div> :
                            <div>
                                <img src="https://files.myglamm.com/site-images/original/no-user-yellow.png" className="h-10 w-10 rounded-full" alt="" />
                            </div>}
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {user ? <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block hover:text-white"
                            color="amber"
                            onClick={signOut}
                        >
                            <span>Sign Out</span>
                        </Button> :
                            <Link to='/login'>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block hover:text-white"
                                    color="amber"
                                    onClick={signOut}
                                >
                                    <span>Login</span>
                                </Button>
                            </Link>}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Sign Out</span>
                    </Button>
                </MobileNav>
            </Navbar>

        </>
    )
};

export default Navigationbar;