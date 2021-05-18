import { useEffect, useState } from 'react';
import productApi from '../../../../api/productsApi';

export default function useCustomHook(productId) {
    const [loading, setloading] = useState(true);
    const [product, setproduct] = useState();
    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.get(productId);
                setproduct(result);
            } catch (error) {
                console.log('Fail error', error);
            }
            setloading(false);
        })();
    }, [productId]);
    return {loading,product};
};
