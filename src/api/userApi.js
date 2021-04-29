import axiosClient from './axiosClient';
const userApi = {
    getAll(params) {
        const url='/products';
        return axiosClient.get(url,params)
    },
    get(id) {const url=`/products/${id}`;
    return axiosClient.get(url)},
    add(data) {
        const url='/products';
        return axiosClient.get(url,data)
    },
    update(data) {},
    remove(id) {},
};
export default userApi;
