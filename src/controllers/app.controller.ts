/* eslint-disable node/no-unpublished-import */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}
  @Get()
  root(): string {
    return 'hi';
  }

  @Post()
  apiRoot(): string {
    return 'hi';
  }

  @Post('welcome')
  async welcome(@Body() body: any) {
    const data: string = body.text.split(' ');
    const name = data[0];
    console.log(name);
    const [user, IsNew] = await this.userService.create({ name });
    if (IsNew) {
      return {
        response_type: 'in_channel',
        text: [
          `안녕하세요 ! 처음오셨네요 ${user.name}님`,
          '해당 서식에 맞춰 자기 소개 부탁드립니다',
          ':two_hearts: 닉네임 :',
          ':two_hearts: 하고 있는 일 :',
          ':two_hearts: 3개월 간 공부할 분야/프로젝트 :',
          ':two_hearts: 연락처 :',
          ':two_hearts: 카톡ID or 이메일 :',
        ].join('\n'),
      };
    } else {
      return {
        response_type: 'in_channel',
        text: `${user.name}님, 또 오셨네요 ! 반가워요`,
      };
    }
  }
}
