import { POSTS_1_7 } from "./blogPosts1";
import { POSTS_8_14 } from "./blogPosts2";
import { POSTS_15_20 } from "./blogPosts3";

export type { FullBlogPost } from "./blogPosts1";

export const ALL_BLOG_POSTS = [...POSTS_1_7, ...POSTS_8_14, ...POSTS_15_20];
