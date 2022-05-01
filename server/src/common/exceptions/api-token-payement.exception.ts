import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenPaymentException extends HttpException {
  constructor() {
    super('Token suggest payment is required', HttpStatus.PAYMENT_REQUIRED);
  }
}
