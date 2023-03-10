/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A theme.
 */
export type themeConfiguration_Full = {
    uuid?: string;
    /**
     * The Theme to which the Configuration belongs.
     */
    theme_uuid?: string;
    /**
     * The Variation to which the Configuration belongs.
     */
    variation_id?: string;
    /**
     * The content of the configuration, which is a JSON object which will vary in structure from theme to theme.
     */
    settings?: any;
    date_created?: string;
    /**
     * Site ID to which this configuration belongs. Will be 0 for the original configuration for a Theme.
     */
    site_id?: number;
};
