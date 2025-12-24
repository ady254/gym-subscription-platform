export interface Testimonial {
  id: string;
  name: string;
  age: number;
  image: string;
  beforeImage: string;
  afterImage: string;
  transformation: string;
  duration: string;
  quote: string;
  program: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rohit Verma',
    age: 32,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    beforeImage: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=400',
    transformation: 'Lost 25kg',
    duration: '6 months',
    quote: 'The HIIT and strength training combo completely transformed my life. I feel more energetic and confident than ever!',
    program: 'HIIT + Strength Training',
  },
  {
    id: '2',
    name: 'Sneha Kapoor',
    age: 28,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    beforeImage: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=400',
    transformation: 'Gained muscle & strength',
    duration: '4 months',
    quote: 'CrossFit changed everything for me. I am stronger, healthier, and more disciplined in all aspects of life.',
    program: 'CrossFit',
  },
  {
    id: '3',
    name: 'Amit Singh',
    age: 35,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    beforeImage: 'https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=400',
    transformation: 'Lost 18kg',
    duration: '5 months',
    quote: 'Amazing trainers, great environment, and results that speak for themselves. Highly recommend!',
    program: 'Weight Loss Program',
  },
  {
    id: '4',
    name: 'Divya Nair',
    age: 26,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    beforeImage: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
    afterImage: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
    transformation: 'Improved flexibility & strength',
    duration: '3 months',
    quote: 'Yoga here is not just exercise, it is a lifestyle. My stress levels have reduced significantly.',
    program: 'Yoga & Wellness',
  },
];
