export type SeverityType = "CRITICAL" | "HIGH" | "MEDIUM";
export type StatusType = "OPEN" | "IN_PROGRESS" | "RESOLVED";

export interface IncidentApiDTO {
    id: string;
    title: string;
    service: string;
    severity: SeverityType;
    status: StatusType;
    createdAt: string;
    description: string;
    version: number;
    resolutionNote?: string;
}