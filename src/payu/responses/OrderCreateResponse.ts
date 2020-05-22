import { OrderCreateStatus } from "./OrderCreateStatus";

export interface OrderCreateResponse {
    /**
     * Address to redirect the buyer
     *
     * @type {string}
     * @memberof OrderCreateResponse
     */
    redirectUri: string,

    /**
     * Order ID generated by the PayU system
     *
     * @type {string}
     * @memberof OrderCreateResponse
     */
    orderId: string,

    /**
     * External order ID (assigned by the shop)
     * 
     * @type {string}
     * @memberof OrderCreateResponse
     */
    extOrderId?: string

    /**
     * order status
     *
     * @type {OrderCreateStatus}
     * @memberof OrderCreateResponse
     */
    status: OrderCreateStatus
}