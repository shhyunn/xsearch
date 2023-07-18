import { Controller,UseGuards,Post,Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @UseGuards(LocalAuthGuard) //login 실행하기 전, 필요한 작업 수행
    @Post('login')
    async login(@Req() req){
        return this.authService.login(req.user);
    }// 결과로 할당된 토큰 반환
}