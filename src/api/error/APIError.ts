export class APIError {
    code: number;
    status: string;
    message: string;
    details?: {
        field: string;
        message: string;
    }[];
}
