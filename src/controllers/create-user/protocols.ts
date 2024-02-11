import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse } from "../potocols";

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<IUser>>;
}


export interface CreateUserParams{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserRepository{
    createUser(params: CreateUserParams): Promise<IUser>;

}