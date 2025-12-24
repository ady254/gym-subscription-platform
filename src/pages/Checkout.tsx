import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, CheckCircle, ArrowLeft } from 'lucide-react';
import { plans } from '../data/plans';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planId = searchParams.get('plan') || plans[0].id;
  const plan = plans.find((p) => p.id === planId);

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('upi');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome to FitLife! Your membership has been activated.
          </p>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {plan?.name}
            </div>
            <div className="text-gray-600 mb-4">{plan?.duration}</div>
            <div className="text-2xl font-bold text-gray-900">
              ₹{plan?.price}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-4">What's Next?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Check your email for membership details</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Download the FitLife app to book classes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Visit any of our centers to get started</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button fullWidth onClick={() => navigate('/booking')}>
              Book Your First Class
            </Button>
            <Button fullWidth variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Plan not found</h2>
          <Button onClick={() => navigate('/plans')}>View Plans</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/plans')}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Plans
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Complete Your Purchase
              </h1>

              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Payment Method
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        paymentMethod === 'upi'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <Smartphone className="w-6 h-6 text-orange-500" />
                      <div className="text-left">
                        <div className="font-semibold">UPI Payment</div>
                        <div className="text-xs text-gray-600">
                          Pay via UPI
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        paymentMethod === 'card'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 text-orange-500" />
                      <div className="text-left">
                        <div className="font-semibold">Card Payment</div>
                        <div className="text-xs text-gray-600">
                          Credit/Debit Card
                        </div>
                      </div>
                    </button>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="space-y-4">
                      <Input
                        label="UPI ID"
                        placeholder="yourname@upi"
                        value={formData.upiId}
                        onChange={(e) =>
                          setFormData({ ...formData, upiId: e.target.value })
                        }
                        required
                      />

                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <div className="text-sm text-gray-600 mb-4">
                          Or scan QR code to pay
                        </div>
                        <div className="w-48 h-48 mx-auto bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-sm">
                            QR Code Placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <Input
                        label="Card Number"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardNumber: e.target.value,
                          })
                        }
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Expiry Date"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={(e) =>
                            setFormData({ ...formData, expiry: e.target.value })
                          }
                          required
                        />
                        <Input
                          label="CVV"
                          placeholder="123"
                          type="password"
                          maxLength={3}
                          value={formData.cvv}
                          onChange={(e) =>
                            setFormData({ ...formData, cvv: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={processing}
                >
                  {processing ? 'Processing...' : `Pay ₹${plan.price}`}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By completing this purchase, you agree to our Terms of Service
                  and Privacy Policy
                </p>
              </form>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Plan</div>
                  <div className="font-semibold text-gray-900">{plan.name}</div>
                  <div className="text-sm text-gray-500">{plan.duration}</div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Plan Price</span>
                    <span className="font-semibold">
                      ₹{plan.originalPrice || plan.price}
                    </span>
                  </div>

                  {plan.discount && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <span>Discount ({plan.discount})</span>
                      <span>
                        -₹{(plan.originalPrice || 0) - plan.price}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t">
                    <span>Total</span>
                    <span className="text-orange-500">₹{plan.price}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
                <div className="font-semibold mb-2">
                  Your membership includes:
                </div>
                <ul className="space-y-1">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-orange-600 font-semibold">
                      +{plan.features.length - 4} more benefits
                    </li>
                  )}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
