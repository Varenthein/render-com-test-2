import { PrismaService } from "../shared/services/prisma.service";
import { Order } from '@prisma/client';
export declare class OrderService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getById(orderId: Order['orderId']): Promise<Order | null>;
    create(orderData: Omit<Order, 'orderId' | 'createdAt' | 'updatedAt'>): Promise<Order>;
}
