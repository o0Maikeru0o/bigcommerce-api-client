import type { giftCertificate_Base } from './giftCertificate_Base';
export type giftCertificate_Full = (giftCertificate_Base & {
    /**
     * The ID of the gift certificate.This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    id?: number;
    /**
     * The ID of the customer placing the order.
     */
    customer_id?: number;
    /**
     * The ID of the order.
     */
    order_id?: number;
    /**
     * Remaining value of the gift certificate. If not set, will default to the amount.
     */
    balance?: string;
    /**
     * Date the gift certificate was purchased. If not assigned, this will be set to today’s date. Date displays in the [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-3.3) timestamp format.
     */
    purchase_date?: string;
    /**
     * Date on which the gift certificate is set to expire. Date displays in the [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-3.3) timestamp format.
     */
    expiry_date?: string;
    /**
     * The email theme to use in the message sent to the recipient.
     */
    template?: giftCertificate_Full.template;
    /**
     * Text that will be sent to the recipient, such as “Congratulations.”
     */
    message?: string;
    /**
     * A unique string that a customer can input to redeem a gift certificate. Values greater than 20 characters will be trimmed down to the first 20 characters and returned in the response.
     * If this field is not set, a value will be autogenerated.
     */
    code?: string;
    status?: giftCertificate_Full.status;
});
export declare namespace giftCertificate_Full {
    /**
     * The email theme to use in the message sent to the recipient.
     */
    enum template {
        BIRTHDAY = "Birthday",
        GIRL = "Girl",
        BOY = "Boy",
        CELEBRATION = "Celebration",
        CHRISTMAS = "Christmas",
        GENERAL = "General"
    }
    enum status {
        ACTIVE = "active",
        PENDING = "pending",
        DISABLED = "disabled",
        EXPIRED = "expired"
    }
}