import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { plans } from '../data/plans';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function Plans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Membership Plans</h1>
          <p className="text-xl">Choose the perfect plan for your fitness journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant={plan.popular ? 'warning' : 'success'} className="px-4 py-1.5 shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <Card
                className={`p-8 h-full ${
                  plan.popular ? 'ring-4 ring-orange-500 scale-105' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-gray-600 mb-4">{plan.duration}</div>

                  {plan.discount && (
                    <div className="mb-2">
                      <span className="text-gray-400 line-through text-lg">
                        ₹{plan.originalPrice}
                      </span>
                      <Badge variant="danger" className="ml-2">
                        {plan.discount}
                      </Badge>
                    </div>
                  )}

                  <div className="text-5xl font-bold text-orange-500 mb-2">
                    ₹{plan.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {plan.duration === '1 Month' && 'per month'}
                    {plan.duration === '3 Months' && '₹1,999/month'}
                    {plan.duration === '12 Months' && '₹1,666/month'}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/checkout?plan=${plan.id}`}>
                  <Button
                    fullWidth
                    size="lg"
                    variant={plan.popular ? 'primary' : 'outline'}
                  >
                    Choose Plan
                  </Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compare Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className="text-center py-4 px-4 font-semibold text-gray-900"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Unlimited class access',
                  'All locations',
                  'Mobile app',
                  'Locker & Shower',
                  'Free PT sessions',
                  'Nutrition consultation',
                  'Custom workout plans',
                  'Priority booking',
                  'Guest passes',
                  'Exclusive events',
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.features.some((f) =>
                          f.toLowerCase().includes(feature.toLowerCase().split(' ')[0])
                        ) ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
