import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-ocean font-bold text-sand-beige">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-sand-beige/70">
            Join Karwar LunchBox to start your healthy lunch journey
          </p>
        </div>

        {/* Signup Form */}
        <div className="card">
          <form className="space-y-6" onSubmit={handleSignup}>
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
                placeholder="Create a password (min 6 characters)"
                required
                minLength={6}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-sand-beige/70 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                placeholder="Confirm your password"
                required
                minLength={6}
              />
            </div>

            {/* Password Requirements */}
            <div className="bg-ocean-dark rounded-lg p-4 border border-wave-blue/20">
              <h4 className="text-sm font-semibold text-wave-blue mb-2">Password Requirements:</h4>
              <ul className="text-xs text-sand-beige/70 space-y-1">
                <li className="flex items-center">
                  <svg className={`w-3 h-3 mr-2 ${password.length >= 6 ? 'text-green-400' : 'text-sand-beige/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  At least 6 characters long
                </li>
                <li className="flex items-center">
                  <svg className={`w-3 h-3 mr-2 ${password === confirmPassword && password ? 'text-green-400' : 'text-sand-beige/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Passwords match
                </li>
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-1 h-4 w-4 bg-ocean-dark border-wave-blue/20 rounded focus:ring-wave-blue focus:ring-2"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-sm text-sand-beige/70">
                  I agree to the{" "}
                  <a href="#" className="text-wave-blue hover:text-wave-light transition-colors">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-wave-blue hover:text-wave-light transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  className="mt-1 h-4 w-4 bg-ocean-dark border-wave-blue/20 rounded focus:ring-wave-blue focus:ring-2"
                />
                <label htmlFor="marketing" className="ml-3 text-sm text-sand-beige/70">
                  I'd like to receive updates about new menu items and special offers
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>

            <div className="text-center">
              <span className="text-sm text-sand-beige/70">
                Already have an account?{" "}
                <Link to="/login" className="text-wave-blue hover:text-wave-light font-medium transition-colors">
                  Sign in here
                </Link>
              </span>
            </div>
          </form>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <div className="bg-ocean-dark rounded-lg p-4 border border-wave-blue/20">
            <h3 className="text-sm font-semibold text-sand-beige mb-2">Why create an account?</h3>
            <ul className="text-xs text-sand-beige/70 space-y-1 text-left">
              <li>• Track your orders and subscription status</li>
              <li>• Manage your dietary preferences</li>
              <li>• Get exclusive offers and discounts</li>
              <li>• Faster checkout for future orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
