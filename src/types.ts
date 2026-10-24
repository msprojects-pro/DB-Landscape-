export type ServiceId =
  | 'driveways'
  | 'patios-paving'
  | 'fencing'
  | 'garden-transformations'
  | 'groundworks'
  | 'artificial-grass'
  | 'decking'
  | 'turfing'
  | 'other';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  aspect: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}
