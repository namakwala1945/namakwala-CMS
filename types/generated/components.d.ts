import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CataloguesCatalogues extends Struct.ComponentSchema {
  collectionName: 'components_catalogues_catalogues';
  info: {
    displayName: 'Catalogues';
  };
  attributes: {
    catalogue: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CommonSectionCommonSection extends Struct.ComponentSchema {
  collectionName: 'components_common_section_common_sections';
  info: {
    displayName: 'Common Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CompanyAddressCompanyAddress extends Struct.ComponentSchema {
  collectionName: 'components_company_address_company_addresses';
  info: {
    displayName: 'Company Address';
  };
  attributes: {
    Address: Schema.Attribute.Blocks;
    Email: Schema.Attribute.String;
    Number: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface HomeBannerHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_home_banners';
  info: {
    displayName: 'Home Banner';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    button_label: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
    main_heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    sub_heading: Schema.Attribute.String;
  };
}

export interface KeyFeatureKeyFeature extends Struct.ComponentSchema {
  collectionName: 'components_key_feature_key_features';
  info: {
    displayName: 'keyFeature';
  };
  attributes: {
    benefit: Schema.Attribute.String;
    feature: Schema.Attribute.String;
  };
}

export interface KeyMilestonesKeyMilestones extends Struct.ComponentSchema {
  collectionName: 'components_key_milestones_key_milestones';
  info: {
    displayName: 'Key Milestones';
  };
  attributes: {
    KeyMilestonesOptions: Schema.Attribute.Component<
      'km-option.km-option',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface KmOptionKmOption extends Struct.ComponentSchema {
  collectionName: 'components_km_option_km_options';
  info: {
    displayName: 'KM Option';
  };
  attributes: {
    Key: Schema.Attribute.String;
    Year: Schema.Attribute.String;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface OpenGraphOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_open_graph_open_graphs';
  info: {
    displayName: 'OpenGraph';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images'>;
    siteName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface OurBrandPromiseOurBrandPromise extends Struct.ComponentSchema {
  collectionName: 'components_our_brand_promise_our_brand_promises';
  info: {
    displayName: 'Our Brand Promise';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    keywords: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'open-graph.open-graph', false>;
    title: Schema.Attribute.String;
    twitter: Schema.Attribute.Component<'twitter.twitter', false>;
  };
}

export interface TechnicalSpecificationTechnicalSpecification
  extends Struct.ComponentSchema {
  collectionName: 'components_technical_specification_technical_specifications';
  info: {
    displayName: 'Technical Specification';
  };
  attributes: {
    property: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TwitterTwitter extends Struct.ComponentSchema {
  collectionName: 'components_twitter_twitters';
  info: {
    displayName: 'twitter';
  };
  attributes: {
    card: Schema.Attribute.Enumeration<['summary', 'summary_large_image']>;
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface TypeOfMediaTypeOfMedia extends Struct.ComponentSchema {
  collectionName: 'components_type_of_media_type_of_medias';
  info: {
    displayName: 'Type of Media';
  };
  attributes: {
    Media: Schema.Attribute.Component<'media.media', true>;
    title: Schema.Attribute.String;
  };
}

export interface VideosVideos extends Struct.ComponentSchema {
  collectionName: 'components_videos_videos';
  info: {
    displayName: 'videos';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoFile: Schema.Attribute.Media<'videos', true>;
    videoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner': BannerBanner;
      'catalogues.catalogues': CataloguesCatalogues;
      'common-section.common-section': CommonSectionCommonSection;
      'company-address.company-address': CompanyAddressCompanyAddress;
      'faq.faq': FaqFaq;
      'home-banner.home-banner': HomeBannerHomeBanner;
      'key-feature.key-feature': KeyFeatureKeyFeature;
      'key-milestones.key-milestones': KeyMilestonesKeyMilestones;
      'km-option.km-option': KmOptionKmOption;
      'media.media': MediaMedia;
      'open-graph.open-graph': OpenGraphOpenGraph;
      'our-brand-promise.our-brand-promise': OurBrandPromiseOurBrandPromise;
      'seo.metadata': SeoMetadata;
      'technical-specification.technical-specification': TechnicalSpecificationTechnicalSpecification;
      'twitter.twitter': TwitterTwitter;
      'type-of-media.type-of-media': TypeOfMediaTypeOfMedia;
      'videos.videos': VideosVideos;
    }
  }
}
