interface ImageMetadata {
  imageStyle: string;
  view: string;
  usageTerms: string;
  sortOrder: string;
}

interface Image {
  src: string;
  metadata: ImageMetadata;
}

export interface Product {
  id: string;
  inStock: number;
  name: string;
  color: string[];
  modelId: string;
  price: number;
  salePrice: number;
  link: string;
  isFlash: boolean;
  badgeStyle: string;
  badgeText: string;
  imageSrc: string;
  secondImageSrc?: string;
  discount?: number;
  isSpecialLaunch: boolean;
  specialLaunchType: string;
  orderAble: boolean;
  isFinalSale: boolean;
  pdpImageSrc: string;
  images: Image[];
  gender: string;
}
