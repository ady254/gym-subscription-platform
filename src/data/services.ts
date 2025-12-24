export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  calories: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'strength',
    name: 'Strength Training',
    description: 'Build muscle and increase strength with our expert-led weight training programs.',
    icon: 'Dumbbell',
    duration: '45-60 min',
    intensity: 'High',
    calories: '300-400',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hiit',
    name: 'HIIT',
    description: 'High-intensity interval training for maximum calorie burn and endurance.',
    icon: 'Zap',
    duration: '30-45 min',
    intensity: 'High',
    calories: '400-500',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    description: 'Improve flexibility, balance, and mental clarity through ancient practices.',
    icon: 'Heart',
    duration: '60-75 min',
    intensity: 'Low',
    calories: '150-250',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'crossfit',
    name: 'CrossFit',
    description: 'Functional fitness combining strength, cardio, and gymnastics movements.',
    icon: 'Activity',
    duration: '60 min',
    intensity: 'High',
    calories: '500-600',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'zumba',
    name: 'Zumba',
    description: 'Dance-based cardio workout that makes fitness fun and energetic.',
    icon: 'Music',
    duration: '45 min',
    intensity: 'Medium',
    calories: '300-400',
    image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'mma',
    name: 'MMA',
    description: 'Mixed martial arts training for strength, agility, and self-defense.',
    icon: 'Shield',
    duration: '60 min',
    intensity: 'High',
    calories: '500-700',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'cardio',
    name: 'Cardio',
    description: 'Get your heart pumping with our dynamic cardio classes.',
    icon: 'HeartPulse',
    duration: '30-45 min',
    intensity: 'Medium',
    calories: '250-350',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
