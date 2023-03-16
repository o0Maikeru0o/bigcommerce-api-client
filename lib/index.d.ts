import { AbandonedCartApi } from "./abandoned-carts";
import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { ChannelsApi } from "./channels";
import { CheckoutsApi } from "./checkouts";
import { CurrenciesApi } from "./currencies";
import { CustomersV2Api } from "./customers-v2";
import { CustomersV3Api } from "./customers-v3";
import { Config } from "./model/common";
import { OrderApi } from "./order";
import { PaymentMethodsApi } from "./payment-methods";
import { PaymentProcessingApi } from "./payment-processing";
import { PriceListsApi } from "./price-lists";
import { PricingApi } from "./pricing";
import { RedirectsApi } from "./redirects";
import { ScriptsApi } from "./scripts";
import { SettingsApi } from "./settings";
import { ShippingV2Api } from "./shipping-v2";
import { ShippingV3Api } from "./shipping-v3";
import { SitesApi } from "./sites";
import { StoreInformationApi } from "./store-information";
import { StoreLogsApi } from "./store-logs";
import { SubscribersApi } from "./subscribers";
import { TaxClassesApi } from "./tax-classes";
import { TaxPropertiesApi } from "./tax-properties";
import { TaxRatesAndZonesApi } from "./tax-rates-and-zones";
import { TaxSettingsApi } from "./tax-settings";
import { WishlistsApi } from "./wishlists";
export declare class BigCommerceApiClient {
    private readonly config;
    readonly apiClient: ApiClient;
    readonly abandonedCarts: AbandonedCartApi;
    readonly carts: CartsApi;
    readonly catalog: CatalogApi;
    readonly channels: ChannelsApi;
    readonly checkouts: CheckoutsApi;
    readonly currencies: CurrenciesApi;
    readonly customersV2: CustomersV2Api;
    readonly customersV3: CustomersV3Api;
    readonly orders: OrderApi;
    readonly pricing: PricingApi;
    readonly priceLists: PriceListsApi;
    readonly redirects: RedirectsApi;
    readonly scripts: ScriptsApi;
    readonly settings: SettingsApi;
    readonly shippingV3: ShippingV3Api;
    readonly shippingV2: ShippingV2Api;
    readonly sites: SitesApi;
    readonly storeInformation: StoreInformationApi;
    readonly storeLogs: StoreLogsApi;
    readonly subscribers: SubscribersApi;
    readonly taxClasses: TaxClassesApi;
    readonly taxRatesAndZones: TaxRatesAndZonesApi;
    readonly taxProperties: TaxPropertiesApi;
    readonly taxSettings: TaxSettingsApi;
    readonly wishlists: WishlistsApi;
    readonly paymentMethods: PaymentMethodsApi;
    readonly paymentProcessing: PaymentProcessingApi;
    constructor(config: Config);
    getResources<T>(resourceUrl: string, page?: number, limit?: number): Promise<T[]>;
    flushCache(region?: string): Promise<void>;
}
