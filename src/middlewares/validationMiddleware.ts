import axios from "axios";

export const entityInDB = async (body, entity) => {
    let isInDB = await entity.where(body).fetch();
    if(!isInDB) {
        throw 404;
    }
    return isInDB;
};

export const loginMiddleware= (req, res) => {
    axios
        .post("http://localhost:8000/auth", {
            data: req.body
        })
        .then(response =>{
            return res.status(200).send(response.data);
        })
        .catch(err => {
            return res.status(401).json();
        })
}

export const authUser = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['token'];
    if (!token) {
        return res.status(401).json();
    }
    axios
        .get("http://localhost:8000/verify", {
            headers: {'token' : token}
        })
        .then(res =>{
            req.user = res.data;
            next();
        })
        .catch(err => {
            return res.status(401).json();
        })
}
