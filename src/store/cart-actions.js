import { uiActions } from "./ui-slice";
import axios from 'axios';
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return (dispatch) => {
        axios.get(":)")
            .then(res => {
                dispatch(cartActions.replaceCart(res.data));
            }).catch(error => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!'
                  }))
            })
    }
}

export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        axios.put(":)", {items: cart.items, totalQuantity: cart.totalQuantity})
        .then(res => {
          dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sending cart data successfully!'
          }))
        }).catch(error => {
          dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!'
          }))
        });
    }
};