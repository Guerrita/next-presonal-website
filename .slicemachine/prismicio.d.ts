// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * SEO title field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.seo_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    seo_title: prismicT.RichTextField;
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = SkillsSlice | PresentationBannerSlice | SimpleContentSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
/**
 * Primary content in PresentationBanner → Primary
 *
 */
interface PresentationBannerSliceDefaultPrimary {
    /**
     * Title field in *PresentationBanner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: presentation_banner.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *PresentationBanner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: presentation_banner.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.TitleField;
    /**
     * Contact_Me field in *PresentationBanner → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: presentation_banner.primary.contact_me
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    contact_me: prismicT.LinkField;
    /**
     * photo field in *PresentationBanner → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: presentation_banner.primary.photo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photo: prismicT.ImageField<never>;
}
/**
 * Default variation for PresentationBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PresentationBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PresentationBannerSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PresentationBannerSliceDefaultPrimary>, never>;
/**
 * Slice variation for *PresentationBanner*
 *
 */
type PresentationBannerSliceVariation = PresentationBannerSliceDefault;
/**
 * PresentationBanner Shared Slice
 *
 * - **API ID**: `presentation_banner`
 * - **Description**: `PresentationBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PresentationBannerSlice = prismicT.SharedSlice<"presentation_banner", PresentationBannerSliceVariation>;
/**
 * Primary content in SimpleContent → Primary
 *
 */
interface SimpleContentSliceDefaultPrimary {
    /**
     * Title field in *SimpleContent → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: simple_content.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * description field in *SimpleContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: simple_content.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for SimpleContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SimpleContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SimpleContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SimpleContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SimpleContent*
 *
 */
type SimpleContentSliceVariation = SimpleContentSliceDefault;
/**
 * SimpleContent Shared Slice
 *
 * - **API ID**: `simple_content`
 * - **Description**: `SimpleContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SimpleContentSlice = prismicT.SharedSlice<"simple_content", SimpleContentSliceVariation>;
/**
 * Primary content in Skills → Primary
 *
 */
interface SkillsSliceDefaultPrimary {
    /**
     * Title field in *Skills → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in Skills → Items
 *
 */
export interface SkillsSliceDefaultItem {
    /**
     * image field in *Skills → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Skills → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SkillsSliceDefaultPrimary>, Simplify<SkillsSliceDefaultItem>>;
/**
 * Slice variation for *Skills*
 *
 */
type SkillsSliceVariation = SkillsSliceDefault;
/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSlice = prismicT.SharedSlice<"skills", SkillsSliceVariation>;
/**
 * Primary content in TwoColumnTitleTex → Primary
 *
 */
interface TwoColumnTitleTexSliceDefaultPrimary {
    /**
     * Title_One field in *TwoColumnTitleTex → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: two_column_title_tex.primary.title_one
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_one: prismicT.TitleField;
    /**
     * Description_One field in *TwoColumnTitleTex → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: two_column_title_tex.primary.description_one
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_one: prismicT.RichTextField;
    /**
     * Title_Two field in *TwoColumnTitleTex → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column_title_tex.primary.title_two
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_two: prismicT.TitleField;
    /**
     * Description_Two field in *TwoColumnTitleTex → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column_title_tex.primary.description_two
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_two: prismicT.RichTextField;
}
/**
 * Default variation for TwoColumnTitleTex Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TwoColumnTitleTex`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TwoColumnTitleTexSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TwoColumnTitleTexSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TwoColumnTitleTex*
 *
 */
type TwoColumnTitleTexSliceVariation = TwoColumnTitleTexSliceDefault;
/**
 * TwoColumnTitleTex Shared Slice
 *
 * - **API ID**: `two_column_title_tex`
 * - **Description**: `TwoColumnTitleTex`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TwoColumnTitleTexSlice = prismicT.SharedSlice<"two_column_title_tex", TwoColumnTitleTexSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, AllDocumentTypes, PresentationBannerSliceDefaultPrimary, PresentationBannerSliceDefault, PresentationBannerSliceVariation, PresentationBannerSlice, SimpleContentSliceDefaultPrimary, SimpleContentSliceDefault, SimpleContentSliceVariation, SimpleContentSlice, SkillsSliceDefaultPrimary, SkillsSliceDefaultItem, SkillsSliceDefault, SkillsSliceVariation, SkillsSlice, TwoColumnTitleTexSliceDefaultPrimary, TwoColumnTitleTexSliceDefault, TwoColumnTitleTexSliceVariation, TwoColumnTitleTexSlice };
    }
}