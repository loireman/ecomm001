import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pagination from "@/Components/Pagination";
import { Icon } from "@iconify/react";
import Dropdown from "@/Components/Dropdown";

export default function Index({ auth }) {
    const [search, setSearch] = useState("");

    const handleClick = (search) => {
        const url = new URL(window.location);
        url.searchParams.set("search", search);
        window.location = url;
    };

    const handleSort = (sort) => {
        const url = new URL(window.location);
        url.searchParams.set("sort", sort);
        window.location = url;
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Блог
                </h2>
            }
        >
            <Head title="Блог" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg mb-3 p-3 grid md:flex md:justify-between gap-3">
                        <div className="w-full md:max-w-md border border-gray-300 rounded-full">
                            <form
                                onSubmitCapture={(event) => {
                                    event.preventDefault();
                                    handleClick(search);
                                }}
                                className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden"
                            >
                                <button class="grid place-items-center h-full w-16 text-gray-900 dark:text-gray-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>

                                <input
                                    class="peer h-full w-full outline-none text-md pr-4 bg-transparent border-0 text-gray-900 dark:text-gray-100"
                                    type="search"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="Шукати за назвою.."
                                />
                            </form>
                        </div>

                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex w-full justify-end rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center text-xl font-semibold py-2 w-full md:w-36 mx-auto border border-gray-300 rounded-full text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        Сортування
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link
                                    onClick={() => handleSort("name")}
                                >
                                    Ім'я (від А до Я)
                                </Dropdown.Link>
                                <Dropdown.Link
                                    onClick={() => handleSort("-name")}
                                >
                                    Ім'я (від Я до А)
                                </Dropdown.Link>
                                <Dropdown.Link
                                    onClick={() => handleSort("price")}
                                >
                                    Спочатку найдешевші
                                </Dropdown.Link>
                                <Dropdown.Link
                                    onClick={() => handleSort("-price")}
                                >
                                    Спочатку найдорожчі
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    
                    {/* <Pagination
                        nameContent="товари"
                        pageContent={products}
                    ></Pagination> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
