export interface Tenant {
  id: string;
  name: string;
  schema: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
