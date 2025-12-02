import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep-ocean flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-wave-blue/20 rounded-full flex items-center justify-center mb-6 border-2 border-sand-beige/30">
            <svg className="w-12 h-12 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-ocean font-bold text-sand-beige">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-sand-beige/70">
            Sign in to your Karwar LunchBox account
          </p>
        </div>

        {/* Login Form */}
        <div className="card">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sand-beige/70 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-sand-beige/70 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 bg-ocean-dark border-wave-blue/20 rounded focus:ring-wave-blue focus:ring-2"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-sand-beige/70">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-wave-blue hover:text-wave-light transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>

            <div className="text-center">
              <span className="text-sm text-sand-beige/70">
                Don't have an account?{" "}
                <Link to="/signup" className="text-wave-blue hover:text-wave-light font-medium transition-colors">
                  Sign up here
                </Link>
              </span>
            </div>
          </form>
        </div>

        {/* Admin Access Info */}
        <div className="text-center">
          <p className="text-xs text-sand-beige/50">
            Admin access: Use your registered credentials to access the dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
