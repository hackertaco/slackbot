import express from 'express';
import cors from 'cors';
import './utils/env';
import { UserService } from './service';
const app = express();

app.use(cors());

app.use(express.json());

export function runServer(port:number, host:string) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.listen(port, host), (err: any) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
app.get('/', (_req: express.Request, res: express.Response) => {
  res.json({ res: 'hi' });
});

app.post('/welcome', async (req: express.Request, _res: express.Response) => {
  const data: string = req.body.text.split(' ');
  const name = data[0];
  const userService = new UserService();
  const [user, IsNew] = await userService.create({ name });
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
      respose_type: 'in_channel',
      text: `${user.name}님, 또 오셨네요 ! 반가워요`,
    };
  }
  // typeorm model 을 만들어준다 ( basemodel, user )
  // aws rds postgresql 을 만든다
  // typeorm으로 만들었던 model을 sync

  //aws ec2 생성 ( 이후 ssh 접속 후 docker 배포할 예정 )

  // typeorm을 사용하여 db sync 후 name을 user에 저장,
  // db 마이그레이션, name이 user에 있는지 없는지 확인한 후
  // user에 name이 없으면 db에 저장 후 welcome 띄워줌!
  // user에 name이 있으면 welcome메세지

  // dev 에서 테스트
  // 잘 되면 docker file 에 production 배포코드 작성
  // ec2에 들어가서 git pull 한다
  // docker 설치
  // docker build -t slackbot . => image
  // docker run -d -p 80:3000 slackbot:latest
});

export { app };
