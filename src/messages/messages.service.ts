import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    //MessagesRepository 인스턴스에 접근하고 해당 인스턴스의 메서드를 호출하기 위한 올바른 방법
    return this.messagesRepo.findOne(id); //this 는 주입된 MessageService 인스턴스를 가리킨다.
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
