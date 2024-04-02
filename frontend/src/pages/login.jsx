import exp from 'constants'
import cover_img from "/1.jpg";

const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}

const Login = () => {
    return (
        <div className='w-full h-screen flex items-start'>
            <div className='w-full h-full flex flex-col'>
                <div className='absolute top-[25%] left-[8%] flex flex-col'>
                    <h1 className='text-6xl text-white font-bold my-4'>Turn your Ideas into reality</h1>
                    <p className='text-3xl text-white font-normal  mx-3'>Explore our community</p>
                </div>

                <img src={cover_img} alt="" 
                className='w-full h-full object-cover'/>

            </div>

            <div className='w-3/5 h-full bg-[#E0E0E0] flex flex-col p-10 '>
                <h1 className='text-4xl font-semibold text-[#3c3737] flex flex-col p-20 text-center'>DreamScapes</h1>

                <div className='w-full flex flex-col '>
                    <div className='w-full flex flex-col mb-2' >
                        <h3 className='text-2xl font-semibold mb-2'>Login</h3>
                        <p className='text-base mb-2'>Welcome back! Please enter your details </p>
                    </div>

                     <div className='w-full flex flex-col'>
                        <input
                            type="email"
                            className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
                            placeholder='Email' />
                        
                        <input
                            type="password"
                            className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
                            placeholder='Password' />
                    </div>


                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex'>
                            <input type="checkbox" className='w-4 h-4 mr-2' />
                            <p className='text-sm cursor-pointer underline underline-offset-2'>Forgot Password?</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-8'>
                    <button className='w-full bg-[#060606] text-white rounded-md my-2 p-4 text-center flex items-center justify-center'>Log in</button>
                    <button className='w-full text-[#060606] bg-white border border-black rounded-md p-4 text-center flex items-center justify-center my-1'> 
                    Register
                    </button>

                </div>

                <div className='w-full flex items-center justify-center relative'>
                    <div className='w-full h-l bg-black'></div>
                    <p className='absolute text-black'></p>
                </div>

                <div className='w-full'>
                    <p className='text-sm font-normal  text-[#060606'>Dont have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Login;


