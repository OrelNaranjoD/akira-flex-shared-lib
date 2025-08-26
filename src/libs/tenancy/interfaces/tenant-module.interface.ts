import { BillingCycle } from '../enums/billing-cycle.enum.js';

export interface TenantModule {
  tenantId: string;
  moduleCode: string;
  activatedAt: Date;
  billingCycle: BillingCycle;
}
