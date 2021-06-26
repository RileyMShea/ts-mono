import { Injectable } from "@nestjs/common";
import { meaningOfLife } from "@packages/foo";

@Injectable()
export class AppService {
  getHello = (): string => `The meaning of life is: ${meaningOfLife}`;
}
