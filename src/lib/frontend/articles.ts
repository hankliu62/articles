import fetch from 'isomorphic-fetch';

import { GithubApi, GitHubApiVersion, GithubFrontendToken, GithubOwner } from '@/constants/backend';
import type { IArticle } from '@/interfaces/articles';

const auth = GithubFrontendToken.join('');
const DefaultPerPage = 10;

// 缓存的所有问题
const cacheArticles: Map<string, IArticle[]> = new Map();
// 最后缓存的时间
const lastCacheArticlesTimestamp: Map<string, number> = new Map();

/**
 * 前端获取问题列表
 *
 * @param repo
 * @param page
 * @param options
 * @returns
 */
export const fetchArticles = async (
  repo: string,
  page: number,
  options: Record<string, any> = {},
): Promise<IArticle[]> => {
  let url = `${GithubApi}/repos/${GithubOwner}/${repo}/issues`;

  const perPage = options.perPage || DefaultPerPage;
  delete options.perPage;

  // 添加参数
  url += `?creator=${GithubOwner}&per_page=${perPage}&page=${page || 1}`;

  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      url += `&${key}=${options[key]}`;
    }
  }

  return fetch(url, {
    headers: {
      'X-GitHub-Api-Version': GitHubApiVersion,
      Authorization: `Bearer ${auth}`,
    },
  })
    .then((response) => response.json())
    .then((items) => items.filter((item) => item.id !== 20)); // 20: 账号信息
};

/**
 * 前端获取所有问题列表
 *
 * @param repo
 * @param options
 * @returns
 */
export const fetchAllArticles = async (
  repo: string,
  options: Record<string, any> = {},
): Promise<IArticle[]> => {
  return new Promise((resolve) => {
    // 问题列表
    const issues: IArticle[] = [];
    let page = 1;
    async function loopFetchArticle() {
      const currentQuestions = await fetchArticles(repo, page, {
        ...options,
        perPage: 100,
      });
      if (currentQuestions.length > 0) {
        for (const question of currentQuestions) {
          issues.push(question);
        }
        page++;
        setTimeout(loopFetchArticle, 100);
      } else {
        resolve(issues);
      }
    }

    loopFetchArticle();
  });
};

/**
 * 前端搜索问题列表
 *
 * @param repo
 * @param page
 * @param keyword
 * @param options
 * @returns
 */
export const searchArticles = async (
  repo: string,
  page: number,
  keyword?: string,
  options: Record<string, any> = {},
): Promise<IArticle[]> => {
  if (!keyword) {
    return fetchArticles(repo, page, options);
  }

  return new Promise(async (resolve) => {
    const current = Date.now();
    const matchCache = current - (lastCacheArticlesTimestamp.get(repo) || 0) < 60 * 1000 * 60;
    let issues: IArticle[] = [];
    if (matchCache) {
      issues = cacheArticles.get(repo);
    } else {
      // 问题列表
      const fetchedArticles: IArticle[] = await fetchAllArticles(repo, options);
      cacheArticles.set(repo, fetchedArticles);
      lastCacheArticlesTimestamp.set(repo, current);
      issues = fetchedArticles;
    }

    resolve(
      issues
        .filter((issue) => {
          return (
            (issue.title && issue.title.toLowerCase().includes(keyword.toLowerCase())) ||
            (issue.body && issue.body.toLowerCase().includes(keyword.toLowerCase())) ||
            issue.labels?.some((label) => label.name.toLowerCase().includes(keyword.toLowerCase()))
          );
        })
        .slice((page - 1) * DefaultPerPage, page * DefaultPerPage),
    );
  });
};

/**
 * 获取前端问题
 *
 * @param issueNumber
 * @param repo
 * @returns
 */
export const fetchArticle = async (issueNumber: string, repo: string): Promise<IArticle> => {
  let url = `${GithubApi}/repos/${GithubOwner}/${repo}/issues/${issueNumber}`;

  return fetch(url, {
    headers: {
      'X-GitHub-Api-Version': GitHubApiVersion,
      Authorization: `Bearer ${auth}`,
    },
  }).then((response) => response.json());
};
