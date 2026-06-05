import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { useForm } from "react-hook-form";
import { imageUpload } from "../../hooks/imageUpload";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";


const Register = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setLoading(true)
    const { email, password, fullName, image } = data;
    const displayImage = image[0];

    try {
      const picture = await imageUpload(displayImage)
      createUser(email, password)
        .then(() => {
          updateUserProfile(fullName, picture)
            .then(() => {
              emailVerification()
              toast.success("Registration Successful");
              setLoading(false)
              navigate('/')
            })
        })
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center hero-grid py-10">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#0b1514] border mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex items-center justify-center gap-1">
            <img src="./mcpic-logo.png" alt="mcpic-logo" className="w-12" />
            <span className="text-center font-semibold"><p>MCPIC</p></span>
          </div>

          <h1 className="text-3xl font-bold text-center text-[#e8f5f3]">SIGN UP</h1>
          <p className="text-center text-sm">Welcome to MCPIC</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#4a6564]">Full Name</span>
            </label>
            <input type="text" placeholder="Your full name" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...register("fullName", { required: true })} />
            {errors.fullName && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#4a6564]">Image</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...register("image", { required: true })} />
            {errors.image && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#4a6564]">Email</span>
            </label>
            <input type="email" placeholder="your@gmail.com" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...register("email", { required: true })} />
            {errors.email && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#4a6564]">Password</span>
            </label>
            <input type="password" placeholder="*********" className="input input-bordered bg-[#0d1c1a] text-[#e8f5f3] placeholder:text-[#4a6564]" {...register("password", { required: true })} />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label> */}
            {errors.password && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control mt-6">
            <button className="text-sm font-semibold py-2 rounded-2xl md:mr-5 px-5 border-[#30c4b6] bg-[#30c4b6] text-[#080f0e] hover:bg-[#1c9e92] hover:border-[#30c4b6] transition-all ease-in-out duration-1000" disabled={loading}>Register {loading ? <CgSpinnerTwoAlt className="animate-spin" /> : ""}</button>
          </div>

          <p className="text-center text-sm mb-3 mt-5">Already a user?  <Link to={'/login'} className="font-bold text-[#30c4b6] hover:text-[#a89ec9]">Login Now</Link></p>

          <Link to={'/'} className="mb-8 text-center text-xs"><p className="text-neutral-600">Back To Home</p></Link>

        </form>
      </div>
    </div>
  )
}

export default Register