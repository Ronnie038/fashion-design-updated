import React from 'react';
import { Icon } from '@iconify/react';
import image1 from '../../../assets/KidsNewItems/img2.png'
import icon1 from '../../../assets/Fav icon/Rectangle 284.png'

const ProductTable = () => {
    return (
        <>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Regular Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Offer Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                645958160205045
                            </th>
                            <td className="px-6 py-4">
                                <div className='flex gap-1'>
                                    <div className="h-16 w-16 rounded-md overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Image"
                                            className="object-cover object-center h-full w-full"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Gray Shoes
                            </td>
                            <td className="px-6 py-4">
                                Shoes
                            </td>
                            <td className="px-6 py-4">
                                20,000
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                0%
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="bx:edit" className='text-3xl text-[#3B95B0]' />
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="fluent-mdl2:delete" className='text-3xl text-red-700' />
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                645958160205045
                            </th>
                            <td className="px-6 py-4">
                                <div className='flex gap-1'>
                                    <div className="h-16 w-16 rounded-md overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Image"
                                            className="object-cover object-center h-full w-full"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Gray Shoes
                            </td>
                            <td className="px-6 py-4">
                                Shoes
                            </td>
                            <td className="px-6 py-4">
                                20,000
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                0%
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="bx:edit" className='text-3xl text-[#3B95B0]' />
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="fluent-mdl2:delete" className='text-3xl text-red-700' />
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                645958160205045
                            </th>
                            <td className="px-6 py-4">
                                <div className='flex gap-1'>
                                    <div className="h-16 w-16 rounded-md overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Image"
                                            className="object-cover object-center h-full w-full"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                Gray Shoes
                            </td>
                            <td className="px-6 py-4">
                                Shoes
                            </td>
                            <td className="px-6 py-4">
                                20,000
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                550৳
                            </td>
                            <td className="px-6 py-4">
                                0%
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="bx:edit" className='text-3xl text-[#3B95B0]' />
                            </td>
                            <td className="px-6 py-4">
                                <Icon icon="fluent-mdl2:delete" className='text-3xl text-red-700' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductTable;