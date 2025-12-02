import { useState } from 'react';

export default function Menu() {
  const [selectedWeek, setSelectedWeek] = useState('current');
  
  const weeklyMenu = {
    current: [
      { 
        day: "Monday", 
        date: "Dec 2, 2024",
        mainCourse: "Dal Tadka with Jeera Rice",
        sideDish: "Roti (2), Mixed Vegetable Sabzi",
        accompaniment: "Fresh Salad, Pickle, Papad",
        dessert: "Rice Kheer",
        nutritionalInfo: "Calories: 450 | Protein: 12g | Fiber: 8g"
      },
      { 
        day: "Tuesday", 
        date: "Dec 3, 2024",
        mainCourse: "Veg Pulao with Raita",
        sideDish: "Cucumber Raita, Boiled Egg (optional)",
        accompaniment: "Green Salad, Lemon Wedges",
        dessert: "Gulab Jamun (2 pieces)",
        nutritionalInfo: "Calories: 480 | Protein: 10g | Fiber: 6g"
      },
      { 
        day: "Wednesday", 
        date: "Dec 4, 2024",
        mainCourse: "Paneer Butter Masala with Rice",
        sideDish: "Roti (2), Dal Makhani",
        accompaniment: "Onion Salad, Green Chutney",
        dessert: "Custard",
        nutritionalInfo: "Calories: 520 | Protein: 15g | Fiber: 7g"
      },
      { 
        day: "Thursday", 
        date: "Dec 5, 2024",
        mainCourse: "Sambar Rice with Vegetables",
        sideDish: "Curd Rice, Lemon Rice",
        accompaniment: "Fryums, Coconut Chutney",
        dessert: "Fruit Salad",
        nutritionalInfo: "Calories: 420 | Protein: 8g | Fiber: 9g"
      },
      { 
        day: "Friday", 
        date: "Dec 6, 2024",
        mainCourse: "Chicken Curry (or Veg Curry) with Rice",
        sideDish: "Roti (2), Boiled Vegetables",
        accompaniment: "Mixed Salad, Curd",
        dessert: "Ice Cream",
        nutritionalInfo: "Calories: 550 | Protein: 18g | Fiber: 6g"
      },
      { 
        day: "Saturday", 
        date: "Dec 7, 2024",
        mainCourse: "Chole Masala with Rice",
        sideDish: "Roti (2), Aloo Gobi",
        accompaniment: "Kachumber Salad, Pickle",
        dessert: "Halwa",
        nutritionalInfo: "Calories: 480 | Protein: 14g | Fiber: 8g"
      },
      { 
        day: "Sunday", 
        date: "Dec 8, 2024",
        mainCourse: "Special Karwar Fish Curry with Rice",
        sideDish: "Roti (2), Dal Fry",
        accompaniment: "Coconut Salad, Papad",
        dessert: "Payasam",
        nutritionalInfo: "Calories: 500 | Protein: 16g | Fiber: 7g"
      }
    ],
    next: [
      { 
        day: "Monday", 
        date: "Dec 9, 2024",
        mainCourse: "Rajma Chawal",
        sideDish: "Roti (2), Bhindi Masala",
        accompaniment: "Green Salad, Pickle",
        dessert: "Kheer",
        nutritionalInfo: "Calories: 460 | Protein: 13g | Fiber: 8g"
      },
      { 
        day: "Tuesday", 
        date: "Dec 10, 2024",
        mainCourse: "Veg Biryani with Raita",
        sideDish: "Mirchi ka Salan",
        accompaniment: "Onion Rings, Lemon",
        dessert: "Kulfi",
        nutritionalInfo: "Calories: 490 | Protein: 11g | Fiber: 6g"
      },
      { 
        day: "Wednesday", 
        date: "Dec 11, 2024",
        mainCourse: "Malai Kofta with Rice",
        sideDish: "Roti (2), Dal Palak",
        accompaniment: "Cucumber Salad, Chutney",
        dessert: "Rasmalai",
        nutritionalInfo: "Calories: 530 | Protein: 14g | Fiber: 7g"
      },
      { 
        day: "Thursday", 
        date: "Dec 12, 2024",
        mainCourse: "Curd Rice with South Indian Delights",
        sideDish: "Lemon Rice, Tamarind Rice",
        accompaniment: "Fryums, Appalam",
        dessert: "Fruit Custard",
        nutritionalInfo: "Calories: 410 | Protein: 7g | Fiber: 9g"
      },
      { 
        day: "Friday", 
        date: "Dec 13, 2024",
        mainCourse: "Mutton Curry (or Veg Manchurian) with Rice",
        sideDish: "Roti (2), Mixed Vegetables",
        accompaniment: "Salad, Curd",
        dessert: "Brownie",
        nutritionalInfo: "Calories: 560 | Protein: 19g | Fiber: 6g"
      },
      { 
        day: "Saturday", 
        date: "Dec 14, 2024",
        mainCourse: "Dal Makhani with Rice",
        sideDish: "Roti (2), Mixed Sabzi",
        accompaniment: "Kachumber, Achar",
        dessert: "Gajar ka Halwa",
        nutritionalInfo: "Calories: 490 | Protein: 15g | Fiber: 8g"
      },
      { 
        day: "Sunday", 
        date: "Dec 15, 2024",
        mainCourse: "Special Seafood Platter with Rice",
        sideDish: "Roti (2), Dal Tadka",
        accompaniment: "Coconut Salad, Papad",
        dessert: "Coconut Ladoo",
        nutritionalInfo: "Calories: 520 | Protein: 17g | Fiber: 7g"
      }
    ]
  };

  const currentMenu = weeklyMenu[selectedWeek];

  return (
    <div className="min-h-screen bg-deep-ocean py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-ocean font-bold text-sand-beige mb-4">
            Weekly Menu
          </h1>
          <p className="text-xl text-sand-beige/80 max-w-3xl mx-auto">
            Discover our delicious and nutritious weekly menu featuring authentic Karwar cuisine. 
            Every meal is prepared fresh daily with the finest ingredients.
          </p>
        </div>

        {/* Week Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-wave-blue/30 bg-ocean-dark p-1">
            <button
              onClick={() => setSelectedWeek('current')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedWeek === 'current'
                  ? 'bg-wave-blue text-white'
                  : 'text-sand-beige/70 hover:text-sand-beige'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setSelectedWeek('next')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedWeek === 'next'
                  ? 'bg-wave-blue text-white'
                  : 'text-sand-beige/70 hover:text-sand-beige'
              }`}
            >
              Next Week
            </button>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentMenu.map((item, index) => (
            <div 
              key={index} 
              className="card hover:transform hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Day Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-sand-beige">{item.day}</h3>
                  <p className="text-sm text-sand-beige/60">{item.date}</p>
                </div>
                <div className="w-12 h-12 bg-wave-blue/20 rounded-full flex items-center justify-center group-hover:bg-wave-blue/30 transition-colors">
                  <svg className="w-6 h-6 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              {/* Main Course */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-wave-blue mb-2 uppercase tracking-wide">Main Course</h4>
                <p className="text-sand-beige font-medium">{item.mainCourse}</p>
              </div>

              {/* Side Dish */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-wave-blue mb-2 uppercase tracking-wide">Side Dish</h4>
                <p className="text-sand-beige/80">{item.sideDish}</p>
              </div>

              {/* Accompaniments */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-wave-blue mb-2 uppercase tracking-wide">Accompaniments</h4>
                <p className="text-sand-beige/80">{item.accompaniment}</p>
              </div>

              {/* Dessert */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-wave-blue mb-2 uppercase tracking-wide">Dessert</h4>
                <p className="text-sand-beige/80">{item.dessert}</p>
              </div>

              {/* Nutritional Info */}
              <div className="border-t border-wave-blue/20 pt-4">
                <h4 className="text-sm font-semibold text-wave-blue mb-2 uppercase tracking-wide">Nutritional Info</h4>
                <p className="text-xs text-sand-beige/60">{item.nutritionalInfo}</p>
              </div>

              {/* Special Badge */}
              {item.day === 'Sunday' && (
                <div className="absolute top-4 right-4 bg-wave-blue text-white text-xs px-3 py-1 rounded-full">
                  Special
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Menu Notes */}
        <div className="mt-12 text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-sand-beige mb-4">Menu Notes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-wave-blue mb-2">Dietary Options</h4>
                <ul className="text-sm text-sand-beige/80 space-y-1">
                  <li>• Vegetarian options available daily</li>
                  <li>• Jain meals on request</li>
                  <li>• Gluten-free options available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-wave-blue mb-2">Special Instructions</h4>
                <ul className="text-sm text-sand-beige/80 space-y-1">
                  <li>• Menu subject to seasonal availability</li>
                  <li>• 24-hour notice for dietary changes</li>
                  <li>• Sunday features special coastal delicacies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-sand-beige/80 mb-6">
            Like what you see? Subscribe to enjoy these delicious meals daily!
          </p>
          <a href="/pricing" className="btn-primary">
            View Pricing Plans
          </a>
        </div>
      </div>
    </div>
  );
}
