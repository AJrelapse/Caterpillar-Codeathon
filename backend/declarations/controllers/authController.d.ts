import { Request, Response } from "express";
export declare function login(req: Request, res: Response): Promise<void>;
export declare function logout(_req: Request, res: Response): void;
export declare function signup(req: Request, res: Response): Promise<void>;
export declare const resetPassword: (req: Request, res: Response) => Promise<void>;
export declare const changePassword: (req: Request, res: Response) => Promise<void>;
export declare const contactUs: (req: Request, res: Response) => Promise<void>;
