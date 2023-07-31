import {methods as database} from '../data/database.js'

async function listAllBooks() {
    return await database.getAll();
}

export const methods = {
    listAllBooks
}