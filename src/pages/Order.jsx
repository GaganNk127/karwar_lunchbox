import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Order() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    plan: "daily",
    startDate: "",
    dietaryPreferences: "",
    deliveryTime: "12:00-13:00",
    specialInstructions: "",
    paymentMethod: "cod"
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const plans = [
    { value: "daily", label: "Daily Plan", price: "₹100/day" },
    { value: "weekly", label: "Weekly Plan", price: "₹499/week" },
    { value: "monthly", label: "Monthly Plan", price: "₹1,799/month" }
  ];

  const deliveryTimes = [
    "11:30-12:30", "12:00-13:00", "12:30-13:30", "13:00-14:00"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.address || !formData.startDate) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "orders"), {
        ...formData,
        date: new Date(),
        status: "pending",
        createdAt: new Date().toISOString()
      });

      alert("Order placed successfully! We'll contact you soon to confirm your subscription.");
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep-ocean py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-ocean font-bold text-sand-beige mb-4">
            Place Your Order
          </h1>
          <p className="text-xl text-sand-beige/80 max-w-3xl mx-auto">
            Join our lunch subscription service and enjoy healthy, homemade meals delivered daily to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold text-sand-beige mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-wave-blue mb-2">Selected Plan</h3>
                  <div className="bg-ocean-dark rounded-lg p-4 border border-wave-blue/20">
                    <p className="text-sand-beige font-medium">
                      {plans.find(p => p.value === formData.plan)?.label}
                    </p>
                    <p className="text-sand-beige/80 text-sm">
                      {plans.find(p => p.value === formData.plan)?.price}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-wave-blue mb-2">What's Included</h3>
                  <ul className="text-sm text-sand-beige/70 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-wave-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Fresh homemade lunch daily
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-wave-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Doorstep delivery
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-wave-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Weekly menu variety
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-wave-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hygienic packaging
                    </li>
                  </ul>
                </div>

                <div className="border-t border-wave-blue/20 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sand-beige/70">Subtotal</span>
                    <span className="text-sand-beige font-medium">
                      {plans.find(p => p.value === formData.plan)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sand-beige/70">Delivery</span>
                    <span className="text-green-400 font-medium">FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="md:col-span-2">
            <div className="card">
              <form onSubmit={submitOrder} className="space-y-6">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-bold text-sand-beige mb-4">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
                        placeholder="Enter your email (optional)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Delivery Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors resize-none"
                        placeholder="Enter your complete delivery address"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Subscription Details */}
                <div>
                  <h2 className="text-xl font-bold text-sand-beige mb-4">Subscription Details</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Select Plan *
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige focus:outline-none focus:border-wave-blue transition-colors"
                        required
                      >
                        {plans.map((plan) => (
                          <option key={plan.value} value={plan.value}>
                            {plan.label} - {plan.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige focus:outline-none focus:border-wave-blue transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Preferred Delivery Time
                      </label>
                      <select
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige focus:outline-none focus:border-wave-blue transition-colors"
                      >
                        {deliveryTimes.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Payment Method
                      </label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige focus:outline-none focus:border-wave-blue transition-colors"
                      >
                        <option value="cod">Cash on Delivery</option>
                        <option value="upi">UPI/Google Pay</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xl font-bold text-sand-beige mb-4">Additional Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Dietary Preferences (Optional)
                      </label>
                      <textarea
                        name="dietaryPreferences"
                        value={formData.dietaryPreferences}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors resize-none"
                        placeholder="Any dietary restrictions or preferences (e.g., vegetarian, Jain, allergies)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sand-beige/70 mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-3 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors resize-none"
                        placeholder="Any special delivery instructions or requests"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-sand-beige/70">
                      I agree to the terms and conditions and understand that this is a subscription service that will auto-renew unless cancelled.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-sand-beige mb-3">Need Help?</h3>
            <p className="text-sand-beige/70 mb-4">
              Our team is here to help you with any questions about your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="text-wave-blue hover:text-wave-light transition-colors">
                📞 +91 98765 43210
              </a>
              <a href="mailto:info@karwarlunchbox.com" className="text-wave-blue hover:text-wave-light transition-colors">
                ✉️ info@karwarlunchbox.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
