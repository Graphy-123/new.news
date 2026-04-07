import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { password: string }) {
    const hash = await this.authService.hashPassword(body.password);
    return { hash };
  }

  @Post('login')
  async login() {
    return { message: 'login endpoint (to be connected with DB)' };
  }
}
