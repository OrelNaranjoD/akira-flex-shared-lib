export interface TenantResponseDto {
  id: string;
  name: string;
  subdomain: string;
  email: string;
  phone?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  subscriptionEnd?: Date;
  maxUsers: number;
  modules: string[];
}
