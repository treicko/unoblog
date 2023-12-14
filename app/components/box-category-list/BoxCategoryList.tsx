import { RadioGroup } from '@headlessui/react'
import { type Category } from "@prisma/client";

type Categories = Array<Category>;

const BoxCategoryList = ({categories}: {categories:Categories}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {[...categories].map((category:any) => (
        <div key={category.id} className="group relative shadow-md box-border border-2 hover:shadow-lg rounded-lg">
          <div className="mt-4 mb-4 ml-4 mr-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-900">
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {category.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-400">#{category.slug}</p>
            </div>
            <RadioGroup className="mt-2">
              <RadioGroup.Label className="sr-only">Color</RadioGroup.Label>
              <span className="flex items-center">
                <RadioGroup.Option
                  key={category.color}
                  value={category.color}
                  className='relative -m-0.5 flex items-center justify-center rounded-full p-0.5'
                >
                <span
                  aria-hidden="true"
                  className='h-8 w-8 rounded-full border border-black border-opacity-10 ring-gray-400'
                  style={{ backgroundColor: category.color || "" }}
                />
                </RadioGroup.Option>
              </span>
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  )
};

export default BoxCategoryList;
