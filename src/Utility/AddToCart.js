
import { toast } from "react-toastify";





const getStoreCartList = () => {
    const stoRedListStr = localStorage.getItem('cart-list')
    if (stoRedListStr) {
        const storedList = JSON.parse(stoRedListStr);
        return storedList;
    }
    else {
        return []
    }
}

const addToStoreCartList = (id) => {
    // console.log(id)
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        toast.error('Product Already exist in Cart !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    else {
        storedList.push(id);
        const stoRedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', stoRedListStr);
        toast.success('Product Added in Cart !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}

const RemoveCart = (id) => {
    const ida = parseInt(id)
    let storedList = JSON.parse(localStorage.getItem('cart-list')) || []
    storedList = storedList.filter(ib => ib != ida)
    const removedString = JSON.stringify(storedList);
    localStorage.setItem('cart-list', removedString);
    // console.log(typeof (ida), ida, storedList, removedString, storedList)

    // toast------------
    toast.warn('Product removed From cart !', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export { addToStoreCartList, getStoreCartList, RemoveCart }