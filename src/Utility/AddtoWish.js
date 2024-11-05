import { toast } from "react-toastify";

const getStoreWishList = () => {
    const stoCartListStr = localStorage.getItem('wish-list')
    if (stoCartListStr) {
        const storedList = JSON.parse(stoCartListStr);
        return storedList;
    }
    else {
        return []
    }
}

const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        toast.error('Product Already exist in Wish !', {
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
        const stoCartListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', stoCartListStr);
        toast.success('Product Added in Wish list!', {
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

const RemoveWish = (id) => {
    const ida=parseInt(id)
    let storedList = JSON.parse(localStorage.getItem('wish-list')) || []
    storedList = storedList.filter(ib => ib != ida)
    const removedString = JSON.stringify(storedList);
    localStorage.setItem('wish-list', removedString);
    console.log(typeof (ida), ida, storedList, removedString, storedList)
}

export { addToStoreWishList, getStoreWishList, RemoveWish }