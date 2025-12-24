export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  popular?: boolean;
  features: string[];
  badge?: string;
}

export const plans: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly Pass',
    duration: '1 Month',
    price: 2499,
    features: [
      'Unlimited access to all classes',
      'Access to all locations',
      'Free fitness assessment',
      'Mobile app access',
      'Locker facility',
      'Shower facility',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Pass',
    duration: '3 Months',
    price: 5999,
    originalPrice: 7497,
    discount: '20% OFF',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Unlimited access to all classes',
      'Access to all locations',
      'Free fitness assessment',
      'Mobile app access',
      'Locker facility',
      'Shower facility',
      '2 free PT sessions',
      'Nutrition consultation',
      'Workout plan customization',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly Pass',
    duration: '12 Months',
    price: 19999,
    originalPrice: 29988,
    discount: '33% OFF',
    badge: 'Best Value',
    features: [
      'Unlimited access to all classes',
      'Access to all locations',
      'Free fitness assessment',
      'Mobile app access',
      'Locker facility',
      'Shower facility',
      '10 free PT sessions',
      'Monthly nutrition consultation',
      'Personalized workout plans',
      'Priority class booking',
      'Free guest passes (4/year)',
      'Exclusive member events',
    ],
  },
];
