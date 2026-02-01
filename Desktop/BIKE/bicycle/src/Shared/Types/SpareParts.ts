export interface SpareParts {
  id: string;
  name: string;//ENUM: 'frame' | 'fork' | 'wheel' | 'tire' | 'brake' | 'derailleur' | etc.
  description: string;
  manufacturer: string;
  country: string;
  warranty: string;
  inStock: number;
  sold: number;
  price: number;
  category: Category;//ENUM: 'frameandforks' | 'wheelsandtires' | 'brakingsystem' | etc.
  images: [{
      path: string;
      storageName: string;
  }];
  status: string;//ENUM: 'active' | 'inactive' | 'discontinued'
  createdAt: Date;
}

export enum Category {
    FRAME_AND_FORKS,
    WHEELS_AND_TIRES,
    BRAKING_SYSTEM,
    DRIVETRAIN,
    HANDLEBAR_AND_STEM
}
