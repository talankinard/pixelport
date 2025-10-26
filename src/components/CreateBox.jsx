import { Link } from "react-router-dom"

const CreateBox = () =>
{
    return (
        <section className="create-container">
            <h3 className="create-title">Create Your Account</h3>
            <p className="create-subtitle">Join PixelPort and start exploring</p>

            <form className="create-form">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" required />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" required />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Create a password" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" type="password" placeholder="Re-enter password" required />

                <button type="submit">Create Account</button>
            </form>

            <div className="create-links">
                <p>Already have an account?</p>
                <Link to="/login" className="login-link">Sign In</Link>
                <Link to="/" className="cancel-link">Cancel and Return</Link>
            </div>
        </section>
    )
}

export default CreateBox
