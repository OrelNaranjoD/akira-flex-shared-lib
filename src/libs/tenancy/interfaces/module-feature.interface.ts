export interface ModuleFeature {
  code: string;
  name: string;
  description?: string;
  monthlyPrice: number;
  annualPrice?: number;
  isAvailable: boolean;
}
