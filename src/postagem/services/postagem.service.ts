import { Repository } from 'typeorm';
import { Postagem } from './../entities/postagem.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]>{ // prometendo que é uma lista de postagem que vai retornar
    return await this.postagemRepository.find(); // espera a resposta, que pode demorar - vai chegar no BD assim: select * from tb_postagem;
  }
}
