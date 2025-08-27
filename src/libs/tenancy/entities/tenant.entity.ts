export interface TenantEntity {
  id: string;
  name: string;
  subdomain: string;
  schemaName: string;
  email: string;
  phone?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  subscriptionEnd?: Date;
  maxUsers: number;
  modules: string[];
}
