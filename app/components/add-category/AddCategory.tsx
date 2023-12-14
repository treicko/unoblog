import { type Color } from "@prisma/client";

type Category = {
  title: string,
  slug: string,
  color: string
}

type onSubmitFn = (category: Category) => void;
type onCancelFn = () => void;

type AddCategoryType = {
  colors: Array<Color>,
  onSubmit: onSubmitFn,
  onCancel: onCancelFn,
}

const CATEGORY_LABEL = {
  "TITLE": "Title",
  "SLUG": "Slug",
  "COLOR": "Color"
};

const AddCategory = ({ colors, onSubmit, onCancel }: AddCategoryType) => {
  const handleAction = (formData:any) => {
    const category = {
      'title': formData.get('title'),
      'slug': formData.get('slug'),
      'color': formData.get('color'),
    };
    onSubmit(category);
  };  

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <form action={handleAction}>
        <div className="space-y-12 pt-2">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  {CATEGORY_LABEL.TITLE}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">
                  {CATEGORY_LABEL.SLUG}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                  {CATEGORY_LABEL.COLOR}
                </label>
                <div className="mt-2">
                  <select
                    id="color"
                    name="color"
                    autoComplete="color-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >   
                    {[...colors].map((color) => <option>{color.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button 
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory
