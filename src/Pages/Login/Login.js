import React, { useContext, useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const googleProvider = new GoogleAuthProvider();

    const randomNumber1 = Math.floor(Math.random() * 90000) + 10000;
    const randomNumber2 = Math.floor(Math.random() * 90000) + 10000;
    const randomNumber3 = Math.floor(Math.random() * 90000) + 10000;
    const randomNumber4 = Math.floor(Math.random() * 90000) + 10000;

    const data = [{
        name: 'Sales',
        number: randomNumber1,
        img: "https://www.freeiconspng.com/thumbs/calendar-image-png/calendar-image-png-3.png"
    },
    {
        name: 'Revenue',
        number: randomNumber2,
        img: "https://cdn-icons-png.flaticon.com/512/4577/4577278.png"
    },
    {
        name: 'Downloads',
        number: randomNumber3,
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Download-Icon.png"
    },
    {
        name: 'Returns',
        number: randomNumber4,
        img: "https://e7.pngegg.com/pngimages/87/519/png-clipart-product-return-business-logistics-computer-icons-business-text-trademark-thumbnail.png"
    },
    ]

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user

                const dashboardData = {
                    userName: user.displayName,
                    userEmail: user.email,
                    userData: data
                }
                fetch('https://dashboard-server-nu.vercel.app/dashboardg', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(dashboardData)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success("Logged in successfully")
                        navigate('/dashboard')
                        console.log(data);
                    })

                navigate('/dashboard');
            })
            .catch(error => console.log(error.message))
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;

                navigate('/dashboard');
            })
            .catch(err => setErrors(err.code)
            )
    };

    return (
        <div className=' mx-auto max-w-4xl max-h-4xl my-auto hover:shadow-2xl duration-200 shadow-lg py-10 px-10 mt-20 '>
            <div className='flex justify-center flex-col items-center my-auto max-h-3xl md:flex-row-reverse'>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your email and password to login
                    </Typography>
                    <form onSubmit={handleOnSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input name='email' size="lg" label="Email" color='amber' />
                            <Input name='password' type="password" size="lg" label="Password" color='amber' />
                        </div>
                        {/* <Checkbox
                        label={
                            (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="/"
                                        className="font-medium transition-colors hover:text-blue-500"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            )
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    /> */}
                        <Button type='submit' className="mt-6" fullWidth color='amber'>
                            Login
                        </Button>

                        <Button onClick={handleGoogleLogin} className="mt-6" fullWidth color="red">
                            Login with google
                        </Button>

                        <Typography color="Red" className="mt-4 text-center text-red-600 font-normal">
                            {errors}
                        </Typography>

                        <Link to="/signup">
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Don't have an account?{" "}
                                <a
                                    href="/"
                                    className="font-medium text-amber-500 transition-colors hover:text-amber-700"
                                >
                                    Sign Up
                                </a>
                            </Typography>
                        </Link>
                    </form>
                </Card>
                <div className=''>
                    <Player
                        src='https://assets8.lottiefiles.com/private_files/lf30_kj1v7uim.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;