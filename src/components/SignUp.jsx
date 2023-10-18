import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const SignUp = () => {
    const {createUser } = useContext(AuthContext)
    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value
        

        createUser(email,password)
        .then(result=>{
            const createdAt = result.user?.metadata?.creationTime
            const user={email,createdAt:createdAt}
            console.log(result.user)
            fetch('https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/user',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    console.log('new user created successfully')
                }
                
            })
        })
        .catch(error=>console.log(error))
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
