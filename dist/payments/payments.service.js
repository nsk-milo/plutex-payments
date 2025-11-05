"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PaymentsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let PaymentsService = PaymentsService_1 = class PaymentsService {
    prisma;
    httpService;
    configService;
    logger = new common_1.Logger(PaymentsService_1.name);
    constructor(prisma, httpService, configService) {
        this.prisma = prisma;
        this.httpService = httpService;
        this.configService = configService;
    }
    async requestPayment(req) {
        try {
            const authToken = this.configService.get('AUTHTOKEN');
            const url = this.configService.get('MONIUNIFYURL');
            const body = {
                amount: req.amount,
                auth_id: authToken,
                from_payer: req.from_payer,
            };
            this.logger.log(`Initiating payment request to ${url} with body: ${JSON.stringify(body)}`);
            const response = await this.httpService.axiosRef.post(url, body, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            this.logger.error('Payment request failed', error?.message || error);
            return {
                message: 'Payment request failed',
                isError: true,
                data: error?.response?.data || null,
            };
        }
    }
    async verifyPayment(req) {
        try {
            const authToken = this.configService.get('AUTHTOKEN');
            const url = this.configService.get('MONIUNIFYVERIFYURL');
            const body = {
                transaction_id: req.transaction_id,
                auth_id: authToken,
            };
            const response = await this.httpService.axiosRef.post(url, body, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            this.logger.error('Payment verification failed', error?.message || error);
            return {
                message: 'Payment verification failed',
                isError: true,
                data: error?.response?.data || null,
            };
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = PaymentsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        axios_1.HttpService,
        config_1.ConfigService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map