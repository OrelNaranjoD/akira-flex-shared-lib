export interface AuditLogEntity {
  id: number;
  userId: string;
  userEmail: string;
  userType: string;
  tenantId: string;
  method: string;
  url: string;
  statusCode: number;
  controllerName: string;
  methodName: string;
  ipAddress: string;
  userAgent: string;
  params: object;
  query: object;
  body: object;
  response: object;
  error: string;
  executionTime: number;
  createdAt: Date;
}
