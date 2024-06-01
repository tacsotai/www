export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Sotai',
    subtitle: 'Squeeze out the assymetry information',
    description: 'Infomation to enhance for your choice by Maruyama Takeshi',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Sotai - Squeeze out the assymetry information'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'X/Twitter',
            href: 'https://x.com/share?url=https://www.sotai.co'
        },
        {
            text: 'Facebook',
            href: 'http://www.facebook.com/share.php?u=https://www.sotai.co'
        },
        {
            text: 'Line',
            href: 'http://line.me/R/msg/text/?https://www.sotai.co'
        }
    ],
    hero: {
        title: 'アトピーと物理学',
        text: "負荷をかけ過ぎるとバネはバカになる。人体も同様に自然状態や復元構造が半壊する。",
        image: {
            src: '/atopic_physics.png',
            alt: 'アトピーと物理学 フローチャート'
        },
        actions: [
            {
                text: '詳細はこちらから',
                href: '/blog/post-1'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Sotai Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
