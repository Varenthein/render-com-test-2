"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getProducts() {
    return [
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17220',
            name: 'Example phone #1',
            price: 450,
            rate: 5,
            image: 'phone.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17221',
            name: 'Example phone #2',
            price: 4550,
            rate: 5,
            image: 'laptop.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17222',
            name: 'Example phone #3',
            price: 2350,
            rate: 5,
            image: 'laptop.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17223',
            name: 'Example phone #4',
            price: 450,
            rate: 2,
            image: 'phone.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17224',
            name: 'Example phone #5',
            price: 3299,
            rate: 3,
            image: 'laptop.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17225',
            name: 'Example phone #6',
            price: 800,
            rate: 5,
            image: 'phone.jpg',
            description: 'Example description for phone'
        },
        {
            id: 'fd105551-0f0d-4a9f-bc41-c559c8a17226',
            name: 'Example phone #7',
            price: 120,
            rate: 4,
            image: 'phone.jpg',
            description: 'Example description for phone'
        },
    ];
}
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(getProducts().map((product) => {
            return db.product.create({ data: product });
        }));
    });
}
seed();
//# sourceMappingURL=seed.js.map