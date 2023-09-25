export interface Alert {
    message: string;
    type: "error" | "warning" | "info" | "success";
    timeout?: number;
}