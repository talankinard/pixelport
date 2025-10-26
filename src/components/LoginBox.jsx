import { Link } from "react-router-dom"

const LoginBox = () =>
{
    return (
        <section className="login-container">
            <h3 className="login-title">Welcome Back</h3>
            <p className="login-subtitle">Sign in to your PixelPort account</p>

            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Enter your email" required />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Enter your password" required />

                <button type="submit">Sign In</button>
            </form>

            <div className="login-links">
                <p>Need an account?</p>
                <Link to="/Create" className="create-link">Create Account</Link>
                <Link to="/" className="cancel-link">Cancel and Return</Link>
            </div>
        </section>
    )
}

export default LoginBox
