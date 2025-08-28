import { JwtPayload } from '../interfaces/jwt-payload.interface';

export interface LoginResponseDto {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  user: JwtPayload;
}
