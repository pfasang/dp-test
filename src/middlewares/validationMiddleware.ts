import axios from "axios";

export const entityInDB = async (body, entity) => {
    let isInDB = await entity.where(body).fetch();
    if (!isInDB) {
        throw 404;
    }
    return isInDB;
};
