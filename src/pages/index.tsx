import {
  BranchesOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  InteractionOutlined,
  UserOutlined,
} from '@hankliu/icons';
import { Affix, Card, Collapse, Input, List, Rate, Space, Tag, Tooltip } from '@hankliu/hankliu-ui';
import classNames from 'classnames';
import Dayjs from 'dayjs';
import type { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import LoadMore from '@/components/LoadMore';
import { GithubBlogRepo, GithubOrigin, GithubOwner } from '@/constants/backend';
import useAsyncEffect from '@/hooks/useAsyncEffect';
import type { IArticle, ILabel } from '@/interfaces/articles';
import { fetchLabelsByStaticProps } from '@/lib/backend/labels';
import { searchArticles } from '@/lib/frontend/articles';

// 标签排序
const LabelOrders = {
  javascript: 1,
  html: 2,
  css: 3,
  react: 4,
  vue: 5,
  webpack: 6,
  typescript: 7,
  engine: 8,
  algorithm: 9,
  node: 10,
  mixture: 11,
  project: 12,
  handwritten: 13,
  visualization: 14,
  other: 15,
  'no answer': 16,
};

const IconText = ({
  key,
  icon,
  text,
  onClick,
}: {
  key?: string;
  icon: React.FC;
  text: string;
  onClick?: (event: any) => void;
}) => (
  <Space key={key} onClick={onClick || (() => {})}>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Questions({ labels }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  // 选择的Label
  const [selectedLabel, setSelectedLabel] = useState<string>(router.query.label as string);
  // 是否展开
  const [expanded, setExpanded] = useState<boolean>(true);
  // 是否正在获取博客文章
  const [isFetching, setIsFetching] = useState<boolean>(false);
  // 是否获取完所有博客文章
  const [isEnd, setIsEnd] = useState<boolean>(true);
  // 博客文章列表
  const [articles, setArticles] = useState<IArticle[]>([]);
  // 分页-当前页数
  const [page, setPage] = useState<number>(1);
  // 搜索关键词
  const [searchKeyWord, setSearchKeyWord] = useState<string>();

  // 获取博客文章
  const getArticles = async (curPage: number, keyword?: string, label?: string) => {
    setIsFetching(true);
    if (curPage === 1) {
      setIsEnd(false);
    }
    console.log('fetch issues', curPage, label);
    const fetchedArticles = await searchArticles(GithubBlogRepo, curPage, keyword, {
      labels: [label].filter(Boolean).join(','),
    });
    setIsFetching(false);
    setPage(curPage);
    // 首页
    if (curPage === 1) {
      setArticles(fetchedArticles || []);
    } else {
      setArticles((pre) => [...pre, ...(fetchedArticles || [])]);
    }

    if (fetchedArticles?.length === 0) {
      setIsEnd(true);
    }
  };

  useAsyncEffect(async () => {
    getArticles(1, searchKeyWord, router.query.label as string);
  }, []);

  const onChangeLabel = useCallback(
    (label?: ILabel) => {
      setSelectedLabel(label?.name);
      getArticles(1, searchKeyWord, label?.name);
      const newQuery = label ? { ...router.query, label: label.name } : { ...router.query };

      if (!label) {
        delete newQuery.label;
      }

      // 重写路由并传递更新后的查询参数
      router.replace({
        pathname: router.pathname,
        query: newQuery,
      });
    },
    [router, searchKeyWord],
  );

  const onLoadMore = useCallback(() => {
    getArticles(page + 1, searchKeyWord, selectedLabel);
  }, [page, searchKeyWord, selectedLabel]);

  const onSearch = useCallback(
    (value) => {
      setSearchKeyWord(value);
      getArticles(1, value, selectedLabel);
    },
    [selectedLabel],
  );

  return (
    <div className="flex space-x-6 bg-white p-6">
      <div className="w-64">
        <Affix offsetTop={24}>
          <Input.Search
            placeholder="输入关键词，按回车搜索"
            className="mb-4 w-full"
            onSearch={onSearch}
            size="large"
            allowClear
          />
          <Collapse
            className="articles-collapse"
            defaultActiveKey={['labels']}
            onChange={(key) => {
              setExpanded(key.includes('labels'));
            }}
            expandIconPosition="end"
          >
            <Collapse.Panel
              extra={<div className="-mr-2">{expanded ? '收起' : '展开'}</div>}
              header={
                <span
                  className="cursor-pointer text-base font-bold underline-offset-2 hover:text-[#1171ee] hover:underline"
                  onClick={(e) => {
                    e?.preventDefault && e.preventDefault();
                    e?.stopPropagation && e.stopPropagation();
                    // 清空选择的标签
                    onChangeLabel();
                  }}
                  aria-hidden="true"
                >
                  标签
                </span>
              }
              key="labels"
            >
              <div className="max-h-[620px] overflow-y-auto p-[16px]">
                {(labels || []).map((item) => (
                  <div
                    className={classNames(
                      'group flex space-x-4 rounded-md p-2 hover:cursor-pointer hover:bg-[#f7f8fa]',
                      {
                        'bg-[#eaf2ff] hover:bg-[#eaf2ff]': item.name === selectedLabel,
                      },
                    )}
                    key={item.id}
                    onClick={() => onChangeLabel(item)}
                    aria-hidden="true"
                  >
                    <div className="flex flex-col justify-center">
                      <InteractionOutlined
                        style={{ color: `#${item.color}` }}
                        className="text-lg font-medium"
                      />
                    </div>
                    <div
                      className={classNames(
                        'text-base font-normal text-[#515767] group-hover:text-[#1171ee]',
                        {
                          'text-[#1e80ff] group-hover:text-[#1e80ff]': item.name === selectedLabel,
                        },
                      )}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </Collapse.Panel>
          </Collapse>
        </Affix>
      </div>
      <div className="flex-1 overflow-hidden">
        <Card size="small" className="issues-card min-h-full !border-[#d9d9d9]">
          <List
            className="issues-list"
            itemLayout="vertical"
            size="large"
            pagination={false}
            dataSource={articles}
            loading={isFetching}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                className="cursor-pointer rounded-md hover:bg-[#f6f8fa]"
                actions={[
                  <Space
                    key="list-vertical-id"
                    onClick={(e) => {
                      e?.stopPropagation && e.stopPropagation();
                      e?.preventDefault && e.preventDefault();
                      window.open(
                        `${GithubOrigin}/${GithubOwner}/${GithubBlogRepo}/issues/${item.number}`,
                        '_blank',
                      );
                    }}
                    className="group cursor-pointer"
                  >
                    <BranchesOutlined className="group-hover:text-[#1171ee]" />
                    <span className="group-hover:text-[#1171ee]">{`#${item.number}`}</span>
                  </Space>,
                  <Space
                    key="list-vertical-user"
                    onClick={(e) => {
                      e?.stopPropagation && e.stopPropagation();
                      e?.preventDefault && e.preventDefault();
                      window.open(`${GithubOrigin}/${item.user.login}`, '_blank');
                    }}
                    className="group cursor-pointer"
                  >
                    <UserOutlined className="group-hover:text-[#1171ee]" />
                    <span className="group-hover:text-[#1171ee]">{item.user.login}</span>
                  </Space>,
                  <IconText
                    icon={ClockCircleOutlined}
                    text={Dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss')}
                    key="list-vertical-time"
                  />,
                  <IconText
                    icon={CheckSquareOutlined}
                    text={item.state}
                    key="list-vertical-status"
                  />,
                  <Space key="list-difficulty">
                    <Tooltip
                      title={`难度: ${
                        item.milestone?.number ? item.milestone?.number + '颗🌟' : '未设置'
                      }`}
                    >
                      <Rate defaultValue={item.milestone?.number || 0} disabled />
                    </Tooltip>
                  </Space>,
                ]}
                onClick={() => {
                  router.push({
                    pathname: `${router.pathname}/${item.number}`.replace(/\/\//g, '/'),
                  });
                }}
              >
                <List.Item.Meta
                  className="!mb-0"
                  title={
                    <div className="flex items-center justify-start space-x-2">
                      <div className="issue-title underline-offset-2">{item.title}</div>
                      <div className="flex items-center justify-start">
                        {item.labels.map((label) => (
                          <Tag color={`#${label.color}`} key={label.id}>
                            {label.name}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  }
                />
                <div className="truncate empty:hidden">{item.body || ''}</div>
              </List.Item>
            )}
          />
          <LoadMore
            className={classNames({ invisible: page === 1 })}
            disabled={isFetching}
            visible={!isEnd}
            onEnter={onLoadMore}
          />
        </Card>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const labels = await fetchLabelsByStaticProps(GithubBlogRepo, 1);

  const sortedLabels = labels
    // .filter((item) =>
    //   /^博客文章-(.*)相关$|^博客文章-(.*)$/.test(item.description || "")
    // )
    // .map((item) => ({
    //   ...item,
    //   title: item.description.replace(
    //     /^博客文章-(.*)相关$|^博客文章-(.*)$/,
    //     "$1$2"
    //   ),
    // }))
    .map((item) => ({
      ...item,
      title: item.description
        ? item.description
            .replace(/^分类\s*\-\s*/, '')
            .replace(/\s*相关$/, '')
            .trim()
        : '',
    }))
    .filter((item) => item.title !== '账号备忘录')
    .sort((pre, next) => {
      return (
        (LabelOrders[pre.name] || LabelOrders.other) - (LabelOrders[next.name] || LabelOrders.other)
      );
    });

  return {
    props: {
      labels: sortedLabels,
    },
  };
}
