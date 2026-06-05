import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import axios from "axios"
import ForgetPassModal from "../../components/Modals/ForgetPassModal/ForgetPassModal"
import { useState } from "react"
// import axios from "axios"


const Login = () => {
    const [isOpen, setIsOpen] = useState(false)

    // const { user } = useAuth();
    const navigate = useNavigate()
    const { signInUser } = useAuth()

    const loginForm = useForm();
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: loginErrors },
    } = loginForm

    // const loginSubmit = (data) => {
    //     const { email, password } = data;
    //     signInUser(email, password)
    //         .then(result => {
    //             toast.success("Sign In Successful")
    //             const user = { email }
    //             axios.post(`${import.meta.env.VITE_Api_Url}/jwt`, user, {
    //                 withCredentials: true
    //             })
    //                 .then(res => console.log(res.data))
    //             console.log(result.user)
    //             navigate('/')
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //             toast.error("Invalid email or password")
    //         })
    // }

    const loginSubmit = async (data) => {
        const { email, password } = data;

        try {
            const result = await signInUser(email, password);

            const user = { email };

            await axios.post(`${import.meta.env.VITE_Api_Url}/jwt`, user, {
                withCredentials: true
            });

            toast.success("Sign In Successful");
            navigate('/');
        } catch (error) {
            console.log(error.message);
            toast.error("Invalid email or password");
        }
    };


    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }



    return (
        <section className="min-h-screen flex flex-col items-center justify-center hero-grid !border-2 !border-[#122e2a]">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#0b1514] border mx-auto">
                <form className="card-body" onSubmit={handleSubmitLogin(loginSubmit)}>

                    <div className="flex items-center justify-center gap-1">
                        <img src="./mcpic-logo.png" alt="mcpic-logo" className="w-12" />
                        <span className="text-center font-semibold"><p>MCPIC</p></span>
                    </div>

                    <h1 className="text-3xl font-bold text-center text-[#e8f5f3]">WELCOME BACK</h1>
                    <p className="text-center text-sm">Sign in to access your account</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#4a6564]">Email</span>
                        </label>
                        <input type="email" placeholder="your@gmail.com" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...registerLogin("email", { required: true })} />
                        {loginErrors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#4a6564]">Password</span>
                        </label>
                        <input type="password" placeholder="*********" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...registerLogin("password", { required: true })} />
                        {loginErrors.password && <span className="text-red-600">This field is required</span>}
                        <label className="label">
                            <span onClick={() => setIsOpen(true)} className="label-text-alt link link-hover"><p className="hover:underline">Forgot password?</p></span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="text-sm font-semibold py-2 rounded-2xl md:mr-5 px-5 border-[#30c4b6] bg-[#30c4b6] text-[#080f0e] hover:bg-[#1c9e92] hover:border-[#30c4b6] transition-all ease-in-out duration-1000">Login</button>
                    </div>

                </form>

                <ForgetPassModal open={open} close={close} isOpen={isOpen} />


                <p className="text-center text-sm mb-3">New user? <Link to={'/register'} className="font-bold text-[#30c4b6] hover:text-[#a89ec9]">Register Now</Link></p>

                <Link to={'/'} className="mb-10 text-center text-xs"><p className="text-neutral-600">Back To Home</p></Link>
            </div>
        </section>
    )
}

export default Login