import { BranchesOutlined } from '@hankliu/icons';
import {
  Affix,
  Breadcrumb,
  Card,
  Collapse,
  Divider,
  Rate,
  Skeleton,
  Space,
  Tag,
  Tooltip,
  message,
} from '@hankliu/hankliu-ui';
import classNames from 'classnames';
import Dayjs from 'dayjs';
import type { InferGetStaticPropsType } from 'next';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import MarkdownPreview from '@/components/MarkdownPreview';
import { GithubBlogRepo, GithubOrigin, GithubOwner } from '@/constants/backend';
import useAnchor from '@/hooks/useAnchor';
import { fetchAllArticlesByStaticProps } from '@/lib/backend/articles';
import { fetchArticle as getArticle } from '@/lib/frontend/articles';
import type { IArticle } from '@/interfaces/articles';
import { PageTitle } from '@/constants';

interface IArticleMenu {
  id: string;
  title: string;
  text: string;
  href: string;
  prefixLength: number;
  minPrefixLength?: number;
  paddingLeft?: number;
}

/**
 * 博客文章目
 *
 * @returns
 */
// export default function PostPage({ article, menus }: InferGetStaticPropsType<typeof getStaticProps>) {
export default function PostPage({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);
  // 博客文章目
  const [article, setArticle] = useState<IArticle>();
  // 是否正在获取博客文章目
  const [fetching, setFetching] = useState<boolean>(true);
  // 题目字符串
  const menus = useMemo<string[]>(() => {
    return (article?.body || '').split('\r\n').filter((line) => line.startsWith('##'));
  }, [article]);

  async function fetchArticle(curId: string) {
    setFetching(true);
    try {
      const fetchedArticle = await getArticle(curId, GithubBlogRepo);
      setArticle(fetchedArticle);
    } catch (error) {
      message.error('获取博客文章目失败');
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  const articleMenus = useMemo<IArticleMenu[]>(() => {
    let minPrefixLength = Number.MAX_VALUE;
    const items = [];
    for (const menu of menus) {
      const prefixLength = menu.replace(/^(#+)\s(.*)/, '$1').length;
      minPrefixLength = Math.min(prefixLength, minPrefixLength);
      const title = menu.replace(/^#+\s/, '');

      // ID需要特殊处理，生成的markdown中标题犹如下规则(不全，遇到就补充)：
      //  1. 英文字符大写 => 小写
      //  2. 空格 => 中划线
      //  3. 中文符号 => 删除
      const idStr = title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[\u3002\uFF1F\uFF0C\uFF1A\u201C-\u201D\uFF08-\uFF09\u3001\uFF1B\uFF1A]/g, '');
      items.push({
        id: idStr,
        text: menu,
        href: `#${idStr}`,
        title,
        prefixLength,
      });
    }

    return items.map((item) => ({
      ...item,
      minPrefixLength,
      paddingLeft: (item.prefixLength - minPrefixLength) * 16 + 16,
    }));
  }, [menus]);

  const currentSection = useAnchor(articleMenus);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex((element) => isActive(element)) > -1;
  }

  if (!router.isFallback && !article?.number) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="flex flex-col bg-white p-6">
      {fetching ? (
        <Skeleton active />
      ) : (
        <>
          <Breadcrumb className="!mb-6 !text-base" separator="/">
            <Breadcrumb.Item>
              <Link href="/">{PageTitle.split('-')[1].trim()}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{article?.title}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="flex space-x-6">
            <div className="flex-1">
              <Card className="article-card min-h-full !border-[#d9d9d9]">
                <article>
                  <header>
                    <h1 className="mb-5 text-4xl font-bold">{article.title}</h1>
                  </header>

                  <section className="mb-6 flex items-center space-x-8">
                    <Space
                      key="list-vertical-id"
                      onClick={(e) => {
                        e?.stopPropagation && e.stopPropagation();
                        e?.preventDefault && e.preventDefault();
                        window.open(
                          `${GithubOrigin}/${GithubOwner}/${GithubBlogRepo}/articles/${article?.number}`,
                          '_blank',
                        );
                      }}
                      className="group cursor-pointer"
                    >
                      <BranchesOutlined className="group-hover:text-[#1171ee]" />
                      <span className="group-hover:text-[#1171ee]">{`#${article?.number}`}</span>
                    </Space>

                    <Space
                      key="list-vertical-user"
                      onClick={(e) => {
                        e?.stopPropagation && e.stopPropagation();
                        e?.preventDefault && e.preventDefault();
                        window.open(`${GithubOrigin}/${article?.user?.login}`, '_blank');
                      }}
                      className="group cursor-pointer"
                    >
                      <span className="group-hover:text-sky-500">{article?.user?.login}</span>
                    </Space>

                    <Space>
                      <span className="text-[#8a919f]">
                        {article?.created_at &&
                          Dayjs(article?.created_at).format('YYYY-MM-DD HH:mm:ss')}
                      </span>
                    </Space>

                    <Space>
                      <div className="flex items-center justify-start">
                        {(article?.labels || []).map((label) => (
                          <Tag color={`#${label.color}`} key={label.id}>
                            {label.name}
                          </Tag>
                        ))}
                      </div>
                    </Space>

                    <Space key="list-difficulty">
                      <Tooltip
                        title={`难度: ${
                          article.milestone?.number ? article.milestone?.number + '颗🌟' : '未设置'
                        }`}
                      >
                        <Rate defaultValue={article.milestone?.number || 0} disabled />
                      </Tooltip>
                    </Space>
                  </section>

                  <Divider className="mb-6 mt-0" />

                  <section>
                    <MarkdownPreview source={article.body || ''} showLoading />
                  </section>
                </article>
              </Card>
            </div>

            <div className="w-64 bg-white">
              <Affix offsetTop={24}>
                <Collapse
                  className="question-menus-collapse"
                  defaultActiveKey={['menu']}
                  onChange={(key) => {
                    setExpanded(key.includes('labels'));
                  }}
                  expandIconPosition="end"
                >
                  <Collapse.Panel
                    key="menu"
                    header={<span className="text-base">目录</span>}
                    extra={<div className="-mr-2">{expanded ? '收起' : '展开'}</div>}
                  >
                    <ul className="max-h-[620px] list-none space-y-3 overflow-y-auto text-slate-500 dark:text-slate-400">
                      {articleMenus.map((menu) => (
                        <li
                          key={menu.title}
                          id={menu.text}
                          className={classNames(
                            'border-0 !border-l-2 border-solid border-transparent pr-[16px] text-base',
                            {
                              '!border-sky-500': isActive(menu),
                            },
                          )}
                        >
                          <Link
                            href={menu.href}
                            className={classNames(
                              'w-full overflow-hidden !text-[#515767]',
                              isActive(menu)
                                ? '!text-sky-500'
                                : '!hover:text-slate-600 !dark:hover:text-slate-300',
                            )}
                          >
                            <div
                              className="truncate"
                              style={{
                                paddingLeft: `${menu.paddingLeft}px`,
                              }}
                            >
                              {menu.title}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse.Panel>
                </Collapse>
              </Affix>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // const article = await fetchArticleByStaticProps(params.id);

  // const menus = (article.body || '').split('\r\n').filter((line) => line.startsWith('##'));

  return {
    props: {
      // article,
      // menus,
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  const issus = await fetchAllArticlesByStaticProps();

  return {
    paths: issus.map((item) => {
      return {
        params: {
          id: `${item.number}`,
        },
      };
    }),
    fallback: false,
  };
}
