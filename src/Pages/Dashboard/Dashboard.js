import React, { useContext, useState } from 'react';
import BarChart from '../../Components/BarChart/BarChart';
import RadarChart from '../../Components/RadarChart/RadarChart';
import Number from '../../Components/Animated/Number/Number';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';

const Dashboard = () => {

    const { user, loading } = useContext(AuthContext)

    const [data, setData] = useState([]);

    if (loading) {
        return <>
            <div className='h-screen w-full flex justify-center items-center'>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '600px', width: '600px' }}
                />
            </div>
        </>
    }

    axios.get(`https://dashboard-server-nu.vercel.app/dashboard?email=${user?.email}`)
        .then(function (response) {
            // handle success
            console.log("res", response.data.userData);
            setData(response.data.userData)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    return (
        <div>
            <h1>Dashboard</h1>
            <div className='flex justify-around items-center gap-5 mt-4 mb-10'>
                {data?.map((d, i) => <div key={i} className='px-5 py-7 bg-white w-full'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p>{d.name}</p>
                            {/* <p className='text-3xl font-semibold'>{d.number}</p> */}
                            <p className='text-3xl font-semibold'><Number n={d.number}></Number></p>
                        </div>
                        <div>
                            <img src={d.img} alt="" className='h-16 w-16' />
                        </div>
                    </div>
                </div>)}

            </div>
            <div className='flex flex-col  justify-between md:flex-row'>
                <div className='w-[630px]'>
                    <BarChart className='' />
                </div>
                <div className='w-[550px]'>
                    <RadarChart className='' />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;