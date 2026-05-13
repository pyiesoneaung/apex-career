export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  result: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  goals: string;
}

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}
