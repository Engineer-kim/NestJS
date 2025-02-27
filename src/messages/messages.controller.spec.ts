import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => { //describe 은 테스트 그룹을 만드는 함수
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({  //하단의 it 블록 실행되기전 매번 실행되는 설정 코드
      controllers: [MessagesController],
    }).compile(); //테스트 모듈을 컴파일하여 필요한 의존성을 준비

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
