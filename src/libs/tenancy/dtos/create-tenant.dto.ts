import { BillingCycle } from '../enums/billing-cycle.enum.js';

export interface CreateTenantDto {
  name: string;
  modules: string[];
  billingCycle: BillingCycle;
}
