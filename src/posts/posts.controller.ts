import { CreatePostDto } from './posts.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Get()
  async getAll(){
    return this.PostsService.getAll();
  }

  @Get('/:post')
  async getID(@Param('post') post: string,){
    return this.PostsService.getByID(post);
  }

  @Post()
  async create(@Body() data: CreatePostDto){
    return this.PostsService.create(data);
  }

  @Patch('/:post')
  async update(@Param('post') post: string){
    return this.PostsService.update(post);
  }

}
