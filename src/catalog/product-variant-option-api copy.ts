import { ApiClient } from "../api-client";
import { ProductOptionValue } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductVariantOptionValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariantOptionValues<
        Params extends FieldAwareQueryParams,
        T extends ProductOptionValue
    >(
        productId: number,
        optionId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/option/${optionId}/values`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createVariantOptionValue<T extends ProductOptionValue>(
        productId: number,
        optionId: number,
        optionValue: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/option/${optionId}/values`,
            optionValue
        );
        return response.data;
    }

    async getVariantOptionValue<
        T extends ProductOptionValue,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        optionId: number,
        valueId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/option/${optionId}/values/${valueId}`,
                params
            )
        );
        return response.data;
    }

    async updateVariantOptionValue<T extends ProductOptionValue>(
        productId: number,
        optionId: number,
        optionValue: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/option/${optionId}/values/${optionValue.id}`,
            optionValue
        );
        return response.data;
    }

    async deleteVariantOptionValue(
        productId: number,
        optionId: number,
        valueId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/option/${optionId}/values/${valueId}`
        );
    }
}
