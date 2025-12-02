import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Daily',
      price: '₹100',
      period: '/day',
      originalPrice: null,
      savings: null,
      description: 'Perfect for trying our service',
      features: [
        'Fresh homemade lunch',
        'Daily delivery to your location',
        'Menu changes daily',
        'No long-term commitment',
        'Pay as you go'
      ],
      highlighted: false,
      buttonText: 'Try Daily Plan'
    },
    {
      name: 'Weekly',
      price: '₹499',
      period: '/week',
      originalPrice: '₹700',
      savings: 'Save 29%',
      description: 'Most popular choice',
      features: [
        '7 days of delicious meals',
        'Priority delivery timing',
        'Weekly menu planning',
        '1 skip day allowed',
        'Customer support priority'
      ],
      highlighted: true,
      buttonText: 'Choose Weekly Plan'
    },
    {
      name: 'Monthly',
      price: '₹1,799',
      period: '/month',
      originalPrice: '₹3,000',
      savings: 'Save 40%',
      description: 'Best value for regular customers',
      features: [
        '30 days of nutritious meals',
        'Flexible skip days (up to 4)',
        'Custom dietary preferences',
        'Weekend special meals included',
        'Free delivery for extra orders',
        'Priority customer support',
        'Monthly meal planning consultation'
      ],
      highlighted: false,
      buttonText: 'Choose Monthly Plan'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-ocean py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-ocean font-bold text-sand-beige mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-sand-beige/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan that fits your lifestyle and budget. 
            Enjoy healthy, homemade meals without the cooking hassle.
          </p>
          
          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sand-beige">Affordable Pricing</h3>
              <p className="text-sm text-sand-beige/70">Starting at just ₹100 per day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sand-beige">Quality Guaranteed</h3>
              <p className="text-sm text-sand-beige/70">Fresh, hygienic, and homemade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wave-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sand-beige">Convenient Delivery</h3>
              <p className="text-sm text-sand-beige/70">Right to your doorstep</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-wave-blue to-wave-light shadow-coastal border-2 border-sand-beige/30 scale-105'
                  : 'card'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sand-beige text-deep-ocean px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-sand-beige'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.highlighted ? 'text-white/80' : 'text-sand-beige/70'
                }`}>
                  {plan.description}
                </p>
                
                {/* Pricing */}
                <div className="mb-4">
                  {plan.originalPrice && (
                    <p className={`text-sm line-through mb-1 ${
                      plan.highlighted ? 'text-white/60' : 'text-sand-beige/50'
                    }`}>
                      {plan.originalPrice} {plan.period}
                    </p>
                  )}
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-sand-beige'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`ml-1 ${
                      plan.highlighted ? 'text-white/80' : 'text-sand-beige/70'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  {plan.savings && (
                    <p className="text-sm font-semibold text-green-400 mt-2">
                      {plan.savings}
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? 'text-white' : 'text-wave-blue'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/90' : 'text-sand-beige/80'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link 
                to="/order" 
                className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-sand-beige text-deep-ocean hover:bg-sand-light transform hover:-translate-y-1 shadow-lg'
                    : 'btn-primary'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-sand-beige mb-8">
            Compare Plans
          </h2>
          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-wave-blue/20">
                  <th className="text-left py-4 px-6 text-sand-beige font-semibold">Features</th>
                  <th className="text-center py-4 px-6 text-sand-beige font-semibold">Daily</th>
                  <th className="text-center py-4 px-6 text-sand-beige font-semibold">Weekly</th>
                  <th className="text-center py-4 px-6 text-sand-beige font-semibold">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-wave-blue/10">
                  <td className="py-4 px-6 text-sand-beige/80">Price per meal</td>
                  <td className="text-center py-4 px-6 text-sand-beige">₹100</td>
                  <td className="text-center py-4 px-6 text-sand-beige">₹71</td>
                  <td className="text-center py-4 px-6 text-sand-beige">₹60</td>
                </tr>
                <tr className="border-b border-wave-blue/10">
                  <td className="py-4 px-6 text-sand-beige/80">Delivery timing</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Standard</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Priority</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Priority</td>
                </tr>
                <tr className="border-b border-wave-blue/10">
                  <td className="py-4 px-6 text-sand-beige/80">Skip days</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Not applicable</td>
                  <td className="text-center py-4 px-6 text-sand-beige">1 day/week</td>
                  <td className="text-center py-4 px-6 text-sand-beige">4 days/month</td>
                </tr>
                <tr className="border-b border-wave-blue/10">
                  <td className="py-4 px-6 text-sand-beige/80">Custom diet</td>
                  <td className="text-center py-4 px-6 text-sand-beige">❌</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Basic</td>
                  <td className="text-center py-4 px-6 text-sand-beige">✅ Full</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sand-beige/80">Weekend specials</td>
                  <td className="text-center py-4 px-6 text-sand-beige">❌</td>
                  <td className="text-center py-4 px-6 text-sand-beige">Basic</td>
                  <td className="text-center py-4 px-6 text-sand-beige">✅ Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-sand-beige mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-sand-beige mb-3">Can I change my plan later?</h3>
              <p className="text-sand-beige/70 text-sm">
                Yes! You can upgrade or downgrade your plan at any time. Changes will take effect from the next billing cycle.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-sand-beige mb-3">What if I need to skip a day?</h3>
              <p className="text-sand-beige/70 text-sm">
                Weekly and monthly plans offer skip days. Just notify us 24 hours in advance through WhatsApp or call.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-sand-beige mb-3">Is delivery included in the price?</h3>
              <p className="text-sand-beige/70 text-sm">
                Yes, delivery to your office/home within Karwar city limits is included in all plans.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-sand-beige mb-3">What payment methods do you accept?</h3>
              <p className="text-sand-beige/70 text-sm">
                We accept UPI, Google Pay, PhonePe, bank transfers, and cash on delivery.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sand-beige mb-4">
            Ready to start your healthy lunch journey?
          </h2>
          <p className="text-lg text-sand-beige/80 mb-6">
            Join hundreds of satisfied customers enjoying delicious homemade meals daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order" className="btn-primary text-lg px-8 py-4">
              Order Now
            </Link>
            <Link to="/menu" className="btn-secondary text-lg px-8 py-4">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
