import { IncidentApiDTO } from "../../domain/models/incident-api.model";
import { Incident } from "../../domain/models/incident.model";

export class IncidentMapper {
    static fromApi(dto: IncidentApiDTO): Incident {
        return {
            id: dto.id,
            title: dto.title,
            service: dto.service,
            severity: dto.severity,
            status: dto.status,
            createdAt: new Date(dto.createdAt),
            description: dto.description,
            version: dto.version,
            resolutionNote: dto.resolutionNote

        }
    }
}