"use client";

import Link from "next/link";
import React from "react";
import { format } from "date-fns";

type Props = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
};

const PostPreview = ({ slug, title, date, subtitle }: Props) => {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <>
      <div className="mb-2 flex items-start justify-between">
        <div>
          <Link
            href={`https://gcc-articles.vercel.app/articles/${slug}`}
            className="hover:underline"
          >
            <h2 className="font-bold text-1xl truncate max-w-64 md:max-w-xl lg:max-w-3xl">
              {title}
            </h2>
          </Link>
          <h3 className="text-sm line-clamp-2 max-w-64 md:max-w-xl lg:max-w-3xl">
            {subtitle}
          </h3>
        </div>
        <h3 className="text-xs font-medium text-[#4f576c] dark:text-gray-400 pt-3">
          {formattedDate}
        </h3>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mb-4" />
    </>
  );
};

export default PostPreview;
