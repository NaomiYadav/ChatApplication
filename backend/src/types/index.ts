export interface Message {
    sender: string;
    content: string;
    timestamp: Date;
}

export interface ChatRequest {
    sender: string;
    content: string;
}