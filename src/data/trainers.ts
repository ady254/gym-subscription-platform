export interface Trainer {
  id: string;
  name: string;
  specialization: string[];
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
}

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    specialization: ['Strength Training', 'CrossFit', 'MMA'],
    experience: '8 years',
    bio: 'Former national level athlete with a passion for transforming lives through fitness.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['ACE Certified', 'CrossFit Level 2', 'Sports Nutritionist'],
  },
  {
    id: '2',
    name: 'Priya Sharma',
    specialization: ['Yoga', 'Pilates', 'Mindfulness'],
    experience: '10 years',
    bio: 'Certified yoga instructor dedicated to holistic wellness and mind-body connection.',
    image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['RYT 500', 'Prenatal Yoga', 'Meditation Teacher'],
  },
  {
    id: '3',
    name: 'Vikram Singh',
    specialization: ['HIIT', 'Cardio', 'Weight Loss'],
    experience: '6 years',
    bio: 'High-energy trainer specializing in fat loss and cardiovascular fitness.',
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['NASM CPT', 'HIIT Specialist', 'TRX Certified'],
  },
  {
    id: '4',
    name: 'Ananya Reddy',
    specialization: ['Zumba', 'Dance Fitness', 'Aerobics'],
    experience: '5 years',
    bio: 'Dance fitness enthusiast making workouts fun and engaging for everyone.',
    image: 'https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['Zumba Instructor', 'Group Fitness', 'Dance Choreographer'],
  },
  {
    id: '5',
    name: 'Arjun Patel',
    specialization: ['Strength Training', 'Bodybuilding', 'Nutrition'],
    experience: '12 years',
    bio: 'Competitive bodybuilder and nutrition expert helping clients achieve their dream physique.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['ISSA Certified', 'Sports Nutritionist', 'Bodybuilding Coach'],
  },
  {
    id: '6',
    name: 'Meera Iyer',
    specialization: ['CrossFit', 'Functional Training', 'Athletic Performance'],
    experience: '7 years',
    bio: 'CrossFit coach focused on building strength, endurance, and athletic performance.',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
    certifications: ['CrossFit Level 3', 'Olympic Lifting', 'Mobility Specialist'],
  },
];
