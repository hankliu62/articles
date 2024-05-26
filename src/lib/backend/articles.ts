import fetch from 'isomorphic-fetch';
import { Octokit } from 'octokit';

import {
  GithubApi,
  GitHubApiVersion,
  GithubBackendToken,
  GithubBlogRepo,
  GithubOwner,
} from '@/constants/backend';
import type { IArticle } from '@/interfaces/articles';

const auth = GithubBackendToken.join('');

/**
 * 获取博客文章详情
 *
 * @param issueNumber
 * @returns
 */
export const fetchArticleByStaticProps = async (issueNumber: string): Promise<IArticle> => {
  const octokit = new Octokit({
    auth: auth,
  });

  const res = await octokit.request(
    `GET /repos/${GithubOwner}/${GithubBlogRepo}/issues/${issueNumber}`,
    {
      owner: GithubOwner,
      repo: GithubBlogRepo,
      issue_number: +issueNumber,
      headers: {
        'X-GitHub-Api-Version': GitHubApiVersion,
      },
    },
  );

  // 请求成功
  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};

/**
 * 根据分页获取博客文章
 * @param page
 * @param options
 * @returns
 */
export const fetchArticlesByStaticProps = async (page?, options = {}): Promise<IArticle[]> => {
  const octokit = new Octokit({
    auth: auth,
  });

  const res = await octokit.request(`GET /repos/${GithubOwner}/${GithubBlogRepo}/issues`, {
    owner: GithubOwner,
    repo: GithubBlogRepo,
    labels: [],
    per_page: 30,
    page: page || 1,
    headers: {
      'X-GitHub-Api-Version': GitHubApiVersion,
    },
    direction: 'asc',
    ...options,
  });

  // 请求成功
  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};

/**
 * 获取所有博客文章
 * @param options
 * @returns
 */
export const fetchAllArticlesByStaticProps = async (options = {}) => {
  return new Promise<IArticle[]>((resolve, _reject) => {
    // 问题列表
    const questions: IArticle[] = [];
    let page = 1;
    async function loopFetchArticle() {
      const currentQuestions = await fetchArticlesByStaticProps(page, options);
      if (currentQuestions.length > 0) {
        for (const question of currentQuestions) {
          questions.push(question);
        }
        page++;
        setTimeout(loopFetchArticle, 100);
      } else {
        resolve(questions);
      }
    }

    loopFetchArticle();
  });
};

/**
 * 前端获取问题列表
 *
 * @param page
 * @param options
 * @returns
 */
export const fetchArticles = async (
  repo: string,
  page: number,
  options = {},
): Promise<IArticle[]> => {
  let url = `${GithubApi}/repos/${GithubOwner}/${repo}/issues`;

  // 添加参数
  url += `?creator=${GithubOwner}&per_page=10&page=${page || 1}`;

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
  }).then((response) => response.json());
};
