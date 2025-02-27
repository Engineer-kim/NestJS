import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
//@Module 데코레이터는 모듈을 정의하는 데 사용되며, 모듈은 관련된 컨트롤러, 서비스 및 리포지토리를 그룹화하는 데 사용된다.
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository], //서비스 , 레포지터리 등록하여 의존성 주입
})
export class MessagesModule {}
