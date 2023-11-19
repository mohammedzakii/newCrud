export class UserDetails {
    id: number = 0
    name: string = ""
    email: string = ""
    phone: string = ""
}


export interface IDefaultResult {
    statusCode: boolean;
    message: string;
    data: any;
    success: boolean;
}
