import { createContext, useEffect, useState } from "react";
import { device, menu_category } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContexProvider = (props) => {

    const [itemCount, setItemCount] = useState({});
    const addItem = (itemId) => {
        if (!itemCount[itemId]) {
            setItemCount(prevItem => ({ ...prevItem, [itemId]: 1 }))
        } else {
            setItemCount(prevItem => ({ ...prevItem, [itemId]: prevItem[itemId] + 1 }))
        }
    }

    const removeItem = (itemId) => {
        setItemCount(prevItem => ({ ...prevItem, [itemId]: prevItem[itemId] - 1 }))
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const item in itemCount) {
            if (itemCount[item] > 0) {
                let itemInfo = device.find((product) => product._id === Number(item));
                if (itemInfo) {
                    totalPrice += itemInfo.price * itemCount[item];
                }
            }
        }
        return totalPrice;
    }

    const contextValue = {
        device,
        itemCount,
        addItem,
        removeItem,
        menu_category,
        getTotalPrice
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContexProvider;