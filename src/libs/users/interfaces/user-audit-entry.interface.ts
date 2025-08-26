export interface UserAuditEntry {
  userId: string;
  action: string;
  timestamp: Date;
  performedBy: string;
}
