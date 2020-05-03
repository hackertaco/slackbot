import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(express.json());

export function runServer() {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.listen(3000, 'localhost', (err: any) => {
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

app.post('/welcome', (req: express.Request, res: express.Response) => {
  const data: string = req.body.text.split(' ');
  const name = data[0];

  // typeorm model 을 만들어준다 ( basemodel, user )
  // aws rds postgresql 을 만든다
  // typeorm으로 만들었던 model을 sync

  //aws ec2 생성 ( 이후 ssh 접속 후 docker 배포할 예정 )

  // typeorm을 사용하여 db sink 후 name을 user에 저장,
  // db 마이그레이션, name이 user에 있는지 없는지 확인한 후
  // user에 name이 없으면 db에 저장 후 welcome 띄워줌!
  // user에 name이 있으면 welcome메세지

  // dev 에서 테스트
  // 잘 되면 docker file 에 production 배포코드 작성
  // ec2에 들어가서 git pull 한다
  // docker 설치
  // docker build -t slackbot . => image
  // docker run -d -p 80:3000 slackbot:latest

  res.json({ b: 'pass2' });
});

export { app };
