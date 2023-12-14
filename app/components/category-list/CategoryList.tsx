import Link from 'next/link'
import { getCategories } from '@/lib/data';

import styles from './CategoryList.module.css'

const CategoryList = async () => {
    const categories = await getCategories();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <Link
                        href={`/blog?cat=${category.slug}&page=1&limit=4`}
                        key={category.id}
                        className={`${styles.category}`}
                        style={{ backgroundColor: category.color || "" }}
                    >
                        #{category.slug}
                    </Link>
                ))}
            </div>
        </div >

    )
}

export default CategoryList
