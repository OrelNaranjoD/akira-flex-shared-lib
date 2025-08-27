export interface CreateTenantDto {
  name: string;
  subdomain: string;
  email: string;
  phone?: string;
  active?: boolean;
  maxUsers?: number;
  modules?: string[];
}
