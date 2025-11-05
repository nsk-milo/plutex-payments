import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  // constructor(private readonly prisma: PrismaService) {}
  // async getUsers() {
  //   return this.prisma.user.findMany();
  // }
  //
  // async createUser(payload: UserDto) {
  //   const user = await this.prisma.user.create({
  //     data: {
  //       name: payload.name,
  //       email: payload.email,
  //       phone: payload.phone,
  //       role_id: payload.role_id,
  //     },
  //   });
  //
  //   if (user) {
  //     return { status: 200, message: 'User created successfully' };
  //   }
  //   return { status: 422, message: 'User not created' };
  // }
  //
  // async getUserById(id: number) {
  //   return this.prisma.user.findUnique({
  //     where: { user_id: id },
  //     include: {
  //       role: true,
  //     },
  //   });
  // }
}
