import { Module } from '@nestjs/common';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), "public"),
      serveRoot: "/public",
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // hoặc địa chỉ máy chủ PostgreSQL
      port: 5432, // cổng mặc định của PostgreSQL
      username: 'postgres', // tên người dùng PostgreSQL
      password: 'jdgtmg95', // mật khẩu PostgreSQL
      database: 'PetDb', // tên cơ sở dữ liệu
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // đường dẫn tới các entity
      synchronize: true, // tự động đồng bộ hóa các thay đổi với cơ sở dữ liệu
    }),
    PetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
