export interface CarItem {
  id: string;
  title: string;
  imageUrl: string;
  year: string;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: string;
  sold: false;
  hasThreeDImage: boolean;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
  marketplaceVisible: boolean;
  ccMeasurement: number;
  vin: number;
  model: {
    modelFeatures: string[];
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    make: {
      id: number;
      name: string;
      imageUrl: string;
    };
    popular: boolean;
  };
  bodyType: {
    id: number;
    name: string;
    imageUrl: string;
  };
  ownerType: string;
  createdAt: string;
  updatedAt: string;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  carName: string;
  inspectorDetails: {
    inspectedMakes: {
      count: number;
      name: string;
      image: string;
    }[];
    inspectorFullName: String;
    // workshopName: String;
    totalInspection: string;
  };
  financingSettings: {
    loanCalculator: {
      loanPercentage: number;
      ranges: {
        minInterestRate: string;
        maxInterestRate: number;
        minDownPayment: number;
        maxDownPayment: number;
        tenure: number;
      };
      defaultValues: {
        interestRate: number;
        downPayment: number;
        tenure: number;
      };
    };
  };
}

export interface CarListResponse {
  result: CarItem[];
  currentPage: number;
  pageSize: number;
  total: number;
  pageNumber: number;
}
