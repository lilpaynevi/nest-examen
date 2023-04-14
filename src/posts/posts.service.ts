import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class PostsService {
  async getAll() {
    return new Promise((resolve, reject) => {
      const post = prisma.post.findMany();

      console.log(post)
      resolve(post);
    });
  }

  async getByID(id) {
    return new Promise((resolve, reject) => {
      const user = prisma.post.findUnique({
        where: {
          id,
        },
      });

      resolve(user);
    });
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      const post = prisma.post.create({ data: data });
      resolve(post);
    });
  }

  async update(data) {
    return new Promise((resolve, reject) => {
      const post = prisma.post.update({
        where: {
          id: data.id,
        },
        data,
      });

      

      

      resolve(post);
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      const post = prisma.post.delete({
        where: {
          id,
        },
      });
      resolve(post);
    });
  }
}
