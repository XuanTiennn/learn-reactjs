import axiosClientHome from './axiosClientHome';
const productApiHome = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
        // Remove un-needed key
        delete newParams._page;
        // Fetch product list + count
        const productList = await axiosClientHome.get('/products', { params: newParams });
        //const count = await axiosClientHome.get('/products/count', { params: newParams });
        // Build response and return
        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                //total: count,
            },
        };
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClientHome.get(url);
    },
    add(data) {
        const url = '/products';
        return axiosClientHome.get(url, data);
    },
    update(data) {},
    remove(id) {},
};
export default productApiHome;
