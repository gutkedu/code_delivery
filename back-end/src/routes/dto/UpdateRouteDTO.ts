import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './CreateRouteDTO';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {}
