"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type Category, type Color } from "@prisma/client";
import { getCategories, getColors } from "@/lib/data";
import { PlusIcon } from '@heroicons/react/20/solid'

import AddCategory from "../components/add-category/AddCategory";
import BoxCategoryList from "../components/box-category-list/BoxCategoryList";

type AddCategoryType = {
  title: string,
  slug: string,
  color: string
}

const TITLE = "Categories";

const CategoriesPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [colorList, setColorList] = useState<Color[]>([]);
  const [hiddenAddCategory , setHiddenAddCategory] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    getCategories().then(setCategoryList);
  }, []);

  useEffect(() => {
    getColors().then(setColorList);
  }, []);

  const handleOnClick = () => setHiddenAddCategory(!hiddenAddCategory);
  const handleAddCategorySubmit = async ({ title, slug, color }: AddCategoryType) => {
    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        color
      }),
    });

    if (res.status === 200) {
      const categoryCreated = await res.json();
      handleOnClick();
      setCategoryList([...categoryList, categoryCreated]);
    }
  }

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {TITLE}
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleOnClick}
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add
            </button>
          </span>
        </div>
      </div>
      <main>
        { !hiddenAddCategory && <AddCategory colors={colorList} onSubmit={handleAddCategorySubmit} onCancel={handleOnClick} /> }
        <BoxCategoryList categories={categoryList}></BoxCategoryList>
      </main>
    </>
  );
};

export default CategoriesPage;
