import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly currency: string;
}

// export class UpdateProductDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly price?: number;
//   readonly image?: string;
//   readonly currency?: string;
// }

export class UpdateProductDto extends PartialType(CreateProductDto) {}
